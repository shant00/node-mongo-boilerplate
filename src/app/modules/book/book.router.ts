import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import { bookController } from './book.controller'
const router = express.Router()

router.post(
  `/`,
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  bookController.createBook,
)
router.get(`/`, bookController.getBooks)
router.get(`/:id`, bookController.getBook)
router.patch(
  `/:id`,
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  bookController.updateBook,
)
router.patch(
  `/reviews/:id`,
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  bookController.updateReviews,
)

router.delete(
  `/:id`,
  auth(ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.ADMIN),
  bookController.deleteBook,
)
export default router
