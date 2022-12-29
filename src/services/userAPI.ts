import type { HTTPResponse, LoginPasswordForm } from '@/types'

import axiosClient from './axiosClient'

const userAPI = {
  login: (data: LoginPasswordForm): Promise<HTTPResponse<any>> => {
    return axiosClient.post('/api/login', {
      params: data,
    })
  },

  logout: (): Promise<HTTPResponse<null>> => {
    return axiosClient.post('/api/logout', {})
  },
}

export { userAPI }
