import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import userController from '../user/user.controller'

import { UserValidation } from '../user/userValidator'
import { AuthController } from './auth.controller'
import { AuthValidation } from './auth.validation'
const router = express.Router()
router.post(
  '/login',
  validateRequest(AuthValidation.loginZodSchema),
  AuthController.loginUser,
)

router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken,
)

router.post(
  `/signup`,
  validateRequest(UserValidation.createUserZodSchema),
  userController.createUser,
)

export default router
