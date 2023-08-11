import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../share/catchAsync'
import sendResponse from '../../../share/sendResponse'
import { wishListService } from './wishList.service'
import { IWishlist } from './wishlist.interface'

const createWishlist: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await wishListService.addToList(req.user?._id, req.body)

    sendResponse<IWishlist>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist created successfully!',
      data: result,
    })
  },
)
const getWishLisByUserId: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await wishListService.getWhiteListByUserId(req.user?._id)

    sendResponse<IWishlist[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Wishlist retrieved successfully !',
      data: result,
    })
  },
)

const updateWishList = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const payload = req.body
  const userId = req.user?._id
  const result = await wishListService.updateWishList(id, payload, userId)
  sendResponse<IWishlist>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wishlist Update successfully !',
    data: result,
  })
})

const deleteWishlist = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const userId = req.user?._id
  const result = await wishListService.deleteWishlist(id, userId)

  sendResponse<IWishlist>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Delete successfully !',
    data: result,
  })
})

export const wishListController = {
  createWishlist,
  getWishLisByUserId,
  updateWishList,
  deleteWishlist,
}
