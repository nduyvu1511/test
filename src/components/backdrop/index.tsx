import { RootState } from '@/store'
import { useSelector } from 'react-redux'
import { Spinner } from '../spinner'

export const Backdrop = () => {
  const backdropVisible = useSelector((state: RootState) => state.common.backdropVisible)

  if (!backdropVisible) return null

  return (
    <div className="fixed inset-[0] bg-black40 z-[4000] flex-center">
      <div role="status" className="">
        <Spinner />
      </div>
    </div>
  )
}
