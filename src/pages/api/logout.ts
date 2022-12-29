import { HTTPResponse } from '@/types'
import Cookies from 'cookies'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default function handler(req: NextApiRequest, res: NextApiResponse<HTTPResponse<any>>) {
  if (req.method !== 'POST') {
    return res.status(404).json({
      message: 'method not supported',
      status: false,
      data: null,
      validate_token: false,
      code: 404,
    })
  }

  const cookies = new Cookies(req, res)
  cookies.set('access_token')
  cookies.set('chat_access_token')
  cookies.set('chat_refresh_token')

  res.status(200).json({
    message: 'logout successfully',
    data: null,
    validate_token: true,
    code: 200,
    status: true,
  })
}
