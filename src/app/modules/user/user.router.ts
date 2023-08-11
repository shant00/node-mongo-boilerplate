import express from 'express'
import validateRequest from '../../middlewares/validateRequest'
import userController from './user.controller'
import { UserValidation } from './userValidator'

const router = express.Router()

router.post(
  `/signup`,
  validateRequest(UserValidation.createUserZodSchema),
  userController.createUser,
)

export default router
