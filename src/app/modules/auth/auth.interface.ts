import { ENUM_USER_ROLE } from '../../../enums/user'

export type ILoginUser = {
  email: string
  password: string
}

export type ILoginUserResponse = {
  accessToken: string
  refreshToken?: string
}

export type IRefreshTokenResponse = {
  accessToken: string
}

export type IVerifiedLoginUser = {
  email: string
  role: ENUM_USER_ROLE
}

export type IChangePassword = {
  oldPassword: string
  newPassword: string
}
