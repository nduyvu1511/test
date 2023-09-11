import { bambooIcon } from '@/assets'
import Image from 'next/image'
import { Tag } from '../tag'

export const BookingSummary = () => {
  return (
    <div className="bg-white rounded-[12px] overflow-hidden">
      <div className="p-[15px] border-b border-black10 border-solid">
        <p className="uppercase text-[14px] font-semibold leading-[22px]">your flights</p>
      </div>
      <div className="p-[15px]">
        <div className="border-b border-black10 border-solid py-[15px] mb-[15px]">
          <div className="flex items-center mb-[16px]">
            <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#979797] mr-[12px]">
              <p className="font-semibold text-[14px] text-white">01</p>
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-normal line-clamp-1">Fri, 11 Feb, 2022</p>
              <p className="text-[14px] font-semibold line-clamp-1 leading-[21px]">
                Da Nang - Ho Chi Minh
              </p>
            </div>
          </div>

          <div className="flex items-center mb-[12px]">
            <Image alt="" src={bambooIcon} />
            <div className="ml-[12px]">
              <p className="text-[14px] font-semibold text-text-color leading-[22px]">
                Bamboo Airways
              </p>
              <p className="text-[12px] font-semibold text-primary underline leading-[18px]">
                Details
              </p>
            </div>
          </div>

          <div className="flex items-center mb-[16px]">
            <div className="">
              <p className="text-[14px] font-semibold leading-[22px] text-text-color">21:40</p>
              <Tag color="#4D46FA" title="DAD" />
            </div>

            <div className="flex flex-col items-center mx-[20px] flex-1">
              <span className="text-[14px] font-normal leading-[20px]">1h 30m</span>
              <div className="my-[4px] w-full border-b-primary border-b relative">
                <span className="absolute left-[0px] w-[7px] h-[7px] border-primary border border-solid rounded-full bg-white bottom-[-3.5px]"></span>
                <span className="absolute right-[0px] w-[7px] h-[7px] rounded-full bg-primary bottom-[-3.5px]"></span>
              </div>
              <span className="text-[14px] font-normal leading-[20px]">1h 30m</span>
            </div>

            <div className="">
              <p className="text-[14px] font-semibold leading-[22px] text-text-color">Direct</p>
              <Tag color="#4D46FA" title="DAD" />
            </div>
          </div>

          <div className="flex">
            <button className="flex-1 rounded-[12px] bg-[#4D46FA] py-[10px] text-[12px] font-semibold text-white">
              Change departure flight
            </button>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full bg-primary mr-[12px]">
            <p className="font-semibold text-[14px] text-white">02</p>
          </div>
          <div className="flex-1">
            <p className="text-[14px] font-normal line-clamp-1">Sun, 13 Feb, 2022</p>
            <p className="text-[14px] font-semibold line-clamp-1 leading-[21px]">
              Ho Chi Minh - Da Nang
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8F8] p-[15px]">
        <p className="text-[14px] font-normal leading-[21px]">Subtotal</p>
        <p className="text-[14px] font-semibold leading-[21px] text-orange">1,322,000 vnd</p>
      </div>
    </div>
  )
}
