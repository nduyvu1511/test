import { HTTPResponse } from '@/types'
import Cookies from 'cookies'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

const proxy = httpProxy.createProxyServer()

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HTTPResponse<any>>) {
  req.url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/authentication/sign-out`
  const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })
  const access_token = cookies.get('access_token')
  if (access_token) {
    req.headers.Authorization = `Bearer ${access_token}`
  }

  return new Promise((resolve) => {
    const handleLogoutResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''

      proxyRes.on('data', (chunk) => {
        body += chunk
      })
      proxyRes.on('end', () => {
        try {
          const data: HTTPResponse<any> = JSON.parse(body)
          cookies.set('access_token')
          cookies.set('refresh_token')
          ;(res as NextApiResponse).status(data.status).send(data)
        } catch (error) {
          ;(res as NextApiResponse).status(500).send({
            message: 'something went wrong',
            success: false,
            response: {},
            status: 500,
          } as HTTPResponse<any>)
        }

        resolve(true)
      })
    }

    proxy.once('proxyRes', handleLogoutResponse)

    proxy.web(req, res, {
      selfHandleResponse: true,
      changeOrigin: true,
      target: process.env.NEXT_PUBLIC_API_URL,
    })
  })
}
