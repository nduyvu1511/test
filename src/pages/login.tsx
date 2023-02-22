import { useAuth } from '@/hooks'
import { Main } from '@/templates'
import { useRouter } from 'next/router'

const LoginPage = () => {
  const router = useRouter()
  const { loginPassword } = useAuth()

  const login = () => {
    loginPassword({ email: 'admin@easycloud.site', password: 'admin' }, () => {
      router.push('/')
    })
  }

  return (
    <Main description="" title="">
      <div>
        <button className="btn mr-12" onClick={login}>
          Login
        </button>
      </div>
    </Main>
  )
}

export default LoginPage
