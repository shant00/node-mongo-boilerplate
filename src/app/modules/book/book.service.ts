import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiErrors'
import { IBook } from './book.interface'
import { Book } from './book.model'

const createBook = async (payload: IBook, email: string): Promise<IBook> => {
  if (payload.reviews[0]) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'You are not able to give the review to your own book!',
    )
  }
  payload.createdBy = email
  const result = await Book.create(payload)
  return result
}

const getBooks = async (): Promise<IBook[] | null> => {
  return await Book.find({})
}

const getBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id)
  return result
}

const updateBook = async (
  id: string,
  payload: Partial<IBook>,
  email: string,
): Promise<IBook | null> => {
  const isExist = await Book.findById(id)
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }

  if (isExist.createdBy !== email) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to update this book !',
    )
  }
  if (payload.reviews && payload.reviews[0]) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'You are not able to give the review to your own book!',
    )
  }
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const updateBookReviews = async (
  id: string,
  payload: Partial<IBook>,
  email: string,
): Promise<IBook | null> => {
  const isExist = await Book.findById(id)

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found!')
  }

  if (isExist.createdBy === email) {
    throw new ApiError(
      httpStatus.FORBIDDEN,
      'You are not able to give the review to your own book!',
    )
  }

  const validFields = ['reviews']
  const invalidFields = Object.keys(payload).filter(
    field => !validFields.includes(field),
  )
  if (invalidFields.length > 0) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      `Updating fields other than 'reviews' is not allowed: ${invalidFields.join(
        ', ',
      )}`,
    )
  }

  // const updatedFields = { reviews: payload.reviews }
  const updatedBook = await Book.findByIdAndUpdate(
    id,
    { $push: { reviews: { $each: payload.reviews } } },
    {
      new: true,
    },
  )

  return updatedBook
}

const deleteBook = async (id: string, email: string): Promise<IBook | null> => {
  const isExist = await Book.findById(id)
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }

  if (isExist.createdBy !== email) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      'You are not authorized to delete this book !',
    )
  }

  const result = await Book.findByIdAndDelete(id)

  return result
}

export const bookService = {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  updateBookReviews,
}
