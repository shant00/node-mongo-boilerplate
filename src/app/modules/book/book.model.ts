import { Schema, model } from 'mongoose'
import { BookModel, IBook } from './book.interface'

const BookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    createdBy: { type: String, required: false },
    publicationDate: { type: Date, required: true },
    reviews: [{ type: String }],
  },
  { timestamps: true },
)

// BookSchema.pre('save', async function (next) {
//   if (!this.email) {
//     if (this.email) {
//       const user = await User.findOne({ userName: this.createdBy }); // Find user based on owner value
//       if (user) {
//         this.createdBy = user.email;
//       }
//     }
//   }
//   next();
// });

export const Book = model<IBook, BookModel>('Book', BookSchema)
