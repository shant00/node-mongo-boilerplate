import { z } from 'zod'

const createUserZodSchema = z.object({
  body: z.object({
    email: z.string(),
    role: z.enum(['seller', 'buyer', 'admin']).optional(),
    password: z.string(),
    name: z.object({
      firstName: z.string({
        required_error: 'First name is required',
      }),
      lastName: z
        .string({
          required_error: 'Last name is required',
        })
        .optional(),
      middleName: z.string().optional(),
    }),
    address: z.string().optional(),
  }),
})
export const UserValidation = { createUserZodSchema }
