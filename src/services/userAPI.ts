import type { HTTPResponse, LoginRes, UpdateUserInfo } from '@/types'
import { AxiosPromise } from 'axios'
import { axiosInstance } from './axiosInstance'

const userAPI = {
  getUserInfo: (): AxiosPromise<HTTPResponse<LoginRes>> => {
    return axiosInstance.get('/api/v1/me')
  },

  updateUserInfo: (params: UpdateUserInfo): AxiosPromise<HTTPResponse<LoginRes>> => {
    return axiosInstance.post('/api/v1/me', params)
  },
}

export { userAPI }
