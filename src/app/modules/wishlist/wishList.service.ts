import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiErrors'
import { IWishlist } from './wishlist.interface'
import { WishList } from './wishlist.model'

const addToList = async (userId: string, payload: IWishlist) => {
  const existingWishlistItem = await getWhiteListByBookId(
    userId,
    payload?.bookId as unknown as string,
  )

  if (existingWishlistItem) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Book already added to wishlist!',
    )
  }
  return await WishList.create({ userId, ...payload })
}

const getWhiteListByBookId = async (userId: string, bookId: string) => {
  const existingWishlistItem = await WishList.findOne({ userId, bookId })
  return existingWishlistItem
}

const getWhiteListByUserId = async (userId: string) => {
  return await WishList.find({ userId }).populate('bookId')
}

const updateWishList = async (
  id: string,
  payload: Partial<IWishlist>,
  userId: string,
) => {
  const existingWishlistItem = await WishList.findById(id)
  if (!existingWishlistItem) {
    throw new ApiError(httpStatus.NOT_FOUND, 'WishList not found!')
  }
  if (existingWishlistItem.userId?.toString() !== userId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to update this book !',
    )
  }

  return await WishList.findOneAndUpdate(
    { _id: id },
    {
      readingStatus: payload.readingStatus,
    },
    {
      new: true,
    },
  )
}

const deleteWishlist = async (
  id: string,
  userId: string,
): Promise<IWishlist | null> => {
  const isExist = await WishList.findById(id)
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }

  if (isExist.userId?.toString() !== userId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to delete this WishList !',
    )
  }

  const result = await WishList.findByIdAndDelete(id)

  return result
}

export const wishListService = {
  addToList,
  getWhiteListByUserId,
  updateWishList,
  getWhiteListByBookId,
  deleteWishlist,
}
