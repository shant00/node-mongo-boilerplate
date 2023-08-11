import { Model, Types } from 'mongoose'
import { IBook } from '../book/book.interface'
import { IUser } from '../user/user.interface'

export type IWishlist = {
  userId?: Types.ObjectId | IUser
  bookId: Types.ObjectId | IBook
  readingStatus: string
}

export type wishlistModel = Model<IWishlist, Record<string, unknown>>
