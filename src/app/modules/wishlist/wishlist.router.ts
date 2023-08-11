import express from 'express'
import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'
import validateRequest from '../../middlewares/validateRequest'
import { wishListController } from './wishlist.controller'
import { WishlistValidation } from './wishlist.validator'

const router = express.Router()

router.post(
  `/`,
  validateRequest(WishlistValidation.createBookZodSchema),
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN),
  wishListController.createWishlist,
)

router.get(
  '/',
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN),
  wishListController.getWishLisByUserId,
)

router.patch(
  '/:id',
  validateRequest(WishlistValidation.updateBookZodSchema),
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN),
  wishListController.updateWishList,
)
router.delete(
  '/:id',
  validateRequest(WishlistValidation.updateBookZodSchema),
  auth(ENUM_USER_ROLE.BUYER, ENUM_USER_ROLE.SELLER, ENUM_USER_ROLE.ADMIN),
  wishListController.deleteWishlist,
)

export default router
