import { arrowRightIcon, banner } from '@/assets'
import Image from 'next/image'
import { BookingHomeInfo } from '../bookingHomeInfo'
import { useRouter } from 'next/router'

export const HomeScreen = () => {
  const router = useRouter()

  return (
    <div className="">
      <div className={`absolute top-[0px] left-[0px] right-[0px] bottom-[0px]`}>
        <Image src={banner} alt="" className="w-full h-full" />
        <div className="container h-[70%] sm:h-[100%] lg:h-[80%] flex flex-col justify-center absolute top-[0px] left-[0px] right-[0px] bottom-[0px] z-10">
          <div className="">
            <p className="text-[36px] md:text-[52px] lg:text-[70px] font-normal text-text-color leading-[52px] md:leading-[82px] lg:leading-[104px]">
              Hello!
            </p>
            <p className="text-[36px] md:text-[52px] lg:text-[70px] font-normal text-text-color leading-[52px] md:leading-[82px] lg:leading-[104px]">
              Where are
            </p>
            <p className="text-[36px] md:text-[52px] lg:text-[70px] font-normal text-text-color leading-[52px] md:leading-[82px] lg:leading-[104px]">
              you <span className="text-primary">flying</span> to ...
            </p>
          </div>
        </div>
      </div>

      <div className="absolute container bottom-[-50%] sm:bottom-[-40%] lg:bottom-[-38px] left-[0px] right-[0px] z-10">
        <div className="bg-white rounded-[12px] p-[16px] md:p-[30px] pb-[50px] md:pb-[50px] shadow-lg">
          <BookingHomeInfo />
        </div>
        <div className="absolute bottom-[-30px] right-[24px]">
          <button
            onClick={() => router.push('/search')}
            className="btn h-[60px] text-[18px] font-semibold bg-primary"
          >
            <span className="mr-[62px]">Search Flights</span>
            <Image src={arrowRightIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}
