import express from 'express'
import AuthRoutes from '../modules/auth/auth.router'
import BookRoutes from '../modules/book/book.router'
import UserRoutes from '../modules/user/user.router'
import WishListRoutes from '../modules/wishlist/wishlist.router'
const router = express.Router()

const moduleRoutes = [
  {
    path: '/books',
    route: BookRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/wish-list',
    route: WishListRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
