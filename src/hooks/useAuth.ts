import { authAPI } from '@/services'
import { LoginReq } from '@/types'
import { useAsync } from './useAsync'

export const useAuth = () => {
  const { asyncHandler } = useAsync()

  const logout = (onSuccess?: Function) => {
    asyncHandler({
      fetcher: authAPI.getToken(),
      onSuccess: (res) => {
        asyncHandler({
          fetcher: authAPI.logout(res),
          onSuccess: () => onSuccess?.(),
        })
      },
      config: { showSuccessMsg: false },
    })
  }

  const loginPassword = (params: LoginReq, onSuccess?: Function) => {
    asyncHandler({
      fetcher: authAPI.login(params),
      onSuccess: () => {
        onSuccess?.()
      },
    })
  }

  return {
    logout,
    loginPassword
  }
}
