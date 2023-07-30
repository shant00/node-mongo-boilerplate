import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import router from './app/routes'

const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use('/api/v1/users', useRouter)
// app.use('/api/v1/academic-semester', AcademicSemesterRoutes)
// app.get('/', (req: Request, res: Response) => {
//   res.send('API is running')
// })

app.use('/api/v1', router)

app.use(globalErrorHandler)

/**
 NODE_ENV=development
PORT=8000
DATABASE_URL=mongodb+srv://university_mangement:LUrZcjD9LeajLEwW@cluster0.med0q.mongodb.net/univery-management?retryWrites=true&w=majority
 */
export default app
