import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { bookController } from './book.controller'
import { BookValidation } from './book.validation'
const router = express.Router()

router.post(
  `/`,
  validateRequest(BookValidation.createBookZodSchema),
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  bookController.createBook,
)
router.get(`/`, bookController.getBooks)
router.get(`/:id`, bookController.getBook)
router.patch(
  `/:id`,
  validateRequest(BookValidation.updateBookZodSchema),
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  bookController.updateBook,
)
router.patch(
  `/reviews/:id`,
  validateRequest(BookValidation.updateReviewsZodSchema),
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  bookController.updateReviews,
)

router.delete(
  `/:id`,
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  bookController.deleteBook,
)
export default router
