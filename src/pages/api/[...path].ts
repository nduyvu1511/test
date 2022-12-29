import Cookies from 'cookies'
import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

import type { HTTPResponse } from '@/types'

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<HTTPResponse<any>>) {
  return new Promise((resolve) => {
    const cookies = new Cookies(req, res)
    const token = cookies.get('access_token')

    if (token) {
      req.headers.Authorization = `Bearer ${token}`
    }
    req.url = `${process.env.NEXT_PUBLIC_API_URL}${req.url?.replace('/api', '')}`
    proxy.once('proxyRes', () => {
      resolve(true)
    })
    proxy.web(req, res, {
      target: process.env.NEXT_PUBLIC_API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    })
  })
}
