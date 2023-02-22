import { HTTPResponse, TokenRes } from '@/types'
import Cookies from 'cookies'
import httpProxy, { ProxyResCallback } from 'http-proxy'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = httpProxy.createProxyServer()

export default function handler(req: NextApiRequest, res: NextApiResponse<HTTPResponse<any>>) {
  req.url = (process.env.NEXT_PUBLIC_API_URL as string) + '/api/v1/token/refresh'
  const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' })

  return new Promise(async (resolve) => {
    const refreshTokenHandler: ProxyResCallback = (proxyRes, req, res) => {
      let body = ''

      proxyRes.on('data', (chunk) => {
        body += chunk
      })
      proxyRes.on('end', () => {
        try {
          const data: HTTPResponse<TokenRes> = JSON.parse(body)
          const tokenRes = data?.response
          if (data?.success) {
            cookies.set('access_token', tokenRes?.access_token)
            cookies.set('refresh_token', tokenRes?.refresh_token)
          }
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

    proxy.once('proxyRes', refreshTokenHandler)

    proxy.web(req, res, {
      target: process.env.NEXT_PUBLIC_API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    })
  })
}
