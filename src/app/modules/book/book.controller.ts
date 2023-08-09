import { Request, RequestHandler, Response } from 'express'
import httpStatus from 'http-status'
import catchAsync from '../../../share/catchAsync'
import sendResponse from '../../../share/sendResponse'
import { IBook } from './book.interface'
import { bookService } from './book.service'

const createBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const cow = req.body
    const result = await bookService.createCow(cow)

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Book created successfully!',
      data: result,
    })
  },
)

export const bookController = {
  createBook,
}
