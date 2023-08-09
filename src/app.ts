import cors from 'cors'
import express, { Application, NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/routes'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use('/api/v1/users', useRouter)
// app.use('/api/v1/academic-semester', AcademicSemesterRoutes)
app.get('/', (req: Request, res: Response) => {
  res.send('API is running')
})

app.use('/api/v1', router)

app.use(globalErrorHandler)
//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  })
  next()
})
/**
 NODE_ENV=development
PORT=8000
DATABASE_URL=mongodb+srv://university_mangement:LUrZcjD9LeajLEwW@cluster0.med0q.mongodb.net/univery-management?retryWrites=true&w=majority
 */
export default app
