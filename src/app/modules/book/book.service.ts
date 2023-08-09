import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiErrors'
import { IBook } from './book.interface'
import { Book } from './book.model'

const createBook = async (payload: IBook): Promise<IBook> => {
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
): Promise<IBook | null> => {
  const isExist = await Book.findById(id)
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
  }
  const result = await Book.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteBook = async (id: string): Promise<IBook | null> => {
  const isExist = await Book.findById(id)
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Book not found !')
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
}
