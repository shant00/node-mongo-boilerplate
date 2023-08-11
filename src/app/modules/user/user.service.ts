import { IUser } from './user.interface'
import { User } from './user.models'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const newUser = User.create(user)
  return newUser
}
export default { createUser }
