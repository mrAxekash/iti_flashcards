export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type LoginResponse = {
  accessToken: string
}

export type RecoverArgs = {
  email: string
}
export type CreatPass = {
  password: string
  token: string
}
