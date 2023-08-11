import mongoose, { model } from 'mongoose'
import { IWishlist, wishlistModel } from './wishlist.interface'

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book',
    required: true,
  },
  readingStatus: {
    type: String,
    enum: ['read', 'reading', 'to-read'],
    required: true,
  },
})
export const WishList = model<IWishlist, wishlistModel>(
  'WishList',
  wishlistSchema,
)
