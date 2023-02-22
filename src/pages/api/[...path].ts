import type { HTTPResponse } from '@/types'
import Cookies from 'cookies'
import httpProxy from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HTTPResponse<any>>) {
  req.url = (process.env.NEXT_PUBLIC_API_URL as string) + req.url
  const cookies = new Cookies(req, res)
  const access_token = cookies.get('access_token')
  if (access_token) {
    req.headers.Authorization = `Bearer ${access_token}`
  }

  return new Promise((resolve) => {
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
