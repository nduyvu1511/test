import { searchIcon, twoWayIcon } from '@/assets'
import Image from 'next/image'

export const BookingHeader = () => {
  return (
    <div className="bg-white py-[20px]">
      <div className="container flex justify-between items-center">
        <div className="flex-1 flex">
          <div className="flex-1">
            <div className="">
              <p className="text-[16px] font-semibold leading-[24px] text-primary">Da Nang (DAD)</p>
              <p className="text-[12px] font-normal">Fri, 22 Mar, 2022</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="opacity-50">
              <Image alt="" src={twoWayIcon} />
            </p>
          </div>
          <div className="flex-1 flex flex-col items-end">
            <p className="text-[16px] font-semibold leading-[24px] text-primary">
              Ho Chi Minh (SGN)
            </p>
            <p className="text-[12px] font-normal">Fri, 22 Mar, 2022</p>
          </div>
        </div>

        <div className="flex-1 ml-[48px]">
          <div className="flex items-center">
            <p className="text-[14px] font-semibold leading-[21px]">Round-trip</p>
            <span className="border-r border-solid border-black10 h-[20px] mx-[15px]"></span>
            <p className="text-[14px] font-semibold leading-[21px]">
              <span className="text-primary">02</span> Adult,{' '}
              <span className="text-primary">01</span> children
            </p>
            <span className="border-r border-solid border-black10 h-[20px] mx-[15px]"></span>
            <p className="text-[14px] font-semibold leading-[21px]">Business Class</p>
          </div>
        </div>

        <div className="">
          <button className="btn bg-orange md:bg-orange md:hover:bg-orange md:text-[14px]">
            <p className="mr-[10px]">Change Flights</p>
            <Image alt="" src={searchIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}
