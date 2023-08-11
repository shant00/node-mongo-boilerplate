import { z } from 'zod'

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    publicationDate: z.union([z.date(), z.string()]),
  }),
})

const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    genre: z.string().optional(),
    publicationDate: z.union([z.date().optional(), z.string().optional()]),
  }),
})
const updateReviewsZodSchema = z.object({
  body: z.object({
    reviews: z.array(z.string()).optional(),
  }),
})

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
  updateReviewsZodSchema,
}
