import { IBook } from './book.interface'
import { Book } from './book.model'

const createCow = async (payload: IBook): Promise<IBook> => {
  const cow = await Book.create(payload)
  return cow
}

export const bookService = {
  createCow,
}
