import type { HTTPResponse } from '@/types'
import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse<HTTPResponse<any>>) {
  const cookies = new Cookies(req, res)
  const { access_token, refresh_token } = req.body
  cookies.set('access_token', access_token)
  cookies.set('refresh_token', refresh_token)

  res.status(200).json({
    message: 'Set token successfully',
    response: { access_token, refresh_token },
    status: 400,
    success: false,
  })
}
