import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../share/catchAsync'
import sendResponse from '../../../share/sendResponse'
import { IUser } from './user.interface'
import userService from './user.service'

const createUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const user = req.body
    const result = await userService.createUser(user)

    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully!',
      data: result,
    })
  },
)
export default {
  createUser,
}
