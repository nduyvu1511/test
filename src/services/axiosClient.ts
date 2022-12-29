import axios from 'axios'
import { userAPI } from './userAPI'
import { Router } from "next/dist/client/router"

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosClient.interceptors.request.use(async (config) => {
  return config
})

try {
  axiosClient.interceptors.response.use(
    async (response) => {
      if (response?.data) {
        if (response?.data?.result?.code === 401 || response?.data?.result?.code === 403) {
          await userAPI.logout()
          Router?.prototype?.push('/login')
          return
        }

        return response.data
      }
      return response
    },
    (err) => {
      throw err
    }
  )
} catch (error) {
  console.log(error)
}

export default axiosClient
