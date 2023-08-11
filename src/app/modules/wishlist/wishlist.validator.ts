import { z } from 'zod'
const createBookZodSchema = z.object({
  body: z.object({
    bookId: z.string(),
    readingStatus: z.enum(['read', 'reading', 'to-read']),
  }),
})

const updateBookZodSchema = z.object({
  body: z.object({
    bookId: z.string().optional(),
    readingStatus: z.enum(['read', 'reading', 'to-read']).optional(),
  }),
})

export const WishlistValidation = {
  createBookZodSchema,
  updateBookZodSchema,
}
