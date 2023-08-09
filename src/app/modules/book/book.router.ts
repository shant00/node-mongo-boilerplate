import express from 'express'
import { bookController } from './book.controller'
const router = express.Router()

router.post(`/`, bookController.createBook)
router.get(`/`, bookController.getBooks)
router.get(`/:id`, bookController.getBook)
router.patch(`/:id`, bookController.updateBook)
router.delete(`/:id`, bookController.deleteBook)
export default router
