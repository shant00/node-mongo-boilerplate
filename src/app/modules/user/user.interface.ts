import { Model } from 'mongoose'
export type FullName = {
  firstName: string
  lastName: string
  middleName?: string
}

export type IUser = {
  email: string
  role: 'seller' | 'buyer' | 'admin'
  password: string
  name: FullName
  address?: string
}

export type UserModel = {
  isUserExist(
    // eslint-disable-next-line no-unused-vars
    email: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<Pick<any, '_id' | 'password' | 'role' | 'email'>>
  isPasswordMatched(
    // eslint-disable-next-line no-unused-vars
    givenPassword: string,
    // eslint-disable-next-line no-unused-vars
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUser>
