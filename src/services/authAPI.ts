import type { HTTPResponse, LoginReq, LoginRes, RegisterReq, TokenReq, TokenRes } from '@/types'
import { AxiosPromise } from 'axios'
import { axiosInstance } from './axiosInstance'

const authAPI = {
  login: (params: LoginReq): AxiosPromise<HTTPResponse<LoginRes>> => {
    return axiosInstance.post('/api/login', params)
  },

  // No need to use
  loginServer: (params: LoginReq): AxiosPromise<HTTPResponse<LoginRes>> => {
    return axiosInstance.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/authentication/sign-in`,
      params
    )
  },

  register: (params: RegisterReq): AxiosPromise<HTTPResponse<LoginRes>> => {
    return axiosInstance.post('/api/v1/authentication/sign-up', params)
  },

  // No need to use
  registerServer: (params: RegisterReq): AxiosPromise<HTTPResponse<LoginRes>> => {
    return axiosInstance.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/authentication/sign-up`,
      params
    )
  },

  logout: (params: TokenReq): AxiosPromise<HTTPResponse<{ message: string }>> => {
    return axiosInstance.post('/api/logout', params)
  },

  // No need to use
  logoutServer: (params: TokenReq): AxiosPromise<HTTPResponse<{ message: string }>> => {
    return axiosInstance.post('/api/v1/authentication/sign-out', params)
  },

  refreshToken: (params: TokenReq): AxiosPromise<HTTPResponse<TokenRes>> => {
    return axiosInstance.post('/api/refresh', params)
  },

  refreshTokenServer: (params: TokenReq): AxiosPromise<HTTPResponse<TokenRes>> => {
    return axiosInstance.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/token/refresh`, params)
  },

  revokeToken: (params: { token: string }): AxiosPromise<HTTPResponse<{ message: string }>> => {
    return axiosInstance.post('/api/v1/token/revoke', params)
  },

  revokeTokenServer: (params: {
    token: string
  }): AxiosPromise<HTTPResponse<{ message: string }>> => {
    return axiosInstance.post(process.env.NEXT_PUBLIC_API_URL + '/api/v1/token/revoke', params)
  },

  getToken: (): AxiosPromise<HTTPResponse<TokenRes>> => {
    return axiosInstance.get('/api/get-token')
  },

  setToken: (params: Partial<TokenRes>): AxiosPromise<HTTPResponse<TokenRes>> => {
    return axiosInstance.post('/api/set-token', params)
  },
}

export { authAPI }
