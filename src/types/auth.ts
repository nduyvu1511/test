export interface LoginReq {
  email: string
  password: string
}

export interface RegisterReq {
  name: string
  type: string
  email: string
  phone: string
  password: string
}

export interface TokenReq {
  access_token: string
  refresh_token: string
}

export type TokenRes = TokenReq & {
  expires_in: number
}

export interface LoginRes {
  token_type: 'Bearer'
  expires_in: number
  access_token: string
  refresh_token: string
  id: number
  name: string
  email: string
}
