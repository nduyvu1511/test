import type { HTTPResponse } from '@/types'
import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse<HTTPResponse<any>>) {
  const cookies = new Cookies(req, res)
  const access_token = cookies.get('access_token')
  const refresh_token = cookies.get('refresh_token')

  if (!access_token || !refresh_token) {
    return res.status(200).json({
      message: 'Token not found',
      response: {} as any,
      status: 400,
      success: false,
    })
  }

  res.status(200).json({
    message: 'OK',
    response: { access_token, refresh_token },
    status: 200,
    success: true,
  })
}
