import { z } from 'zod'

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string(),
    author: z.string(),
    genre: z.string(),
    publicationDate: z.date(),
    reviews: z.array(z.string()),
  }),
})

export default createBookZodSchema
