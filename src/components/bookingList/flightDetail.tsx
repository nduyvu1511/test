import { bambooIcon } from '@/assets'
import Image from 'next/image'
import React from 'react'

export const FlightDetail = () => {
  return (
    <div className="grid grid-cols-3 gap-x-[100px]">
      <div className="flex col-span-1">
        <div className="flex flex-col justify-between">
          <div className="">
            <p className="text-[14px] font-semibold leading-[22px]">21:40</p>
            <span className="text-[12px] font-normal leading-[22px]">11 Feb</span>
          </div>
          <div className="">
            <span className="text-[12px] font-normal leading-[22px]">1h 30m</span>
          </div>
          <div className="">
            <p className="text-[14px] font-semibold leading-[22px]">21:40</p>
            <span className="text-[12px] font-normal leading-[22px]">11 Feb</span>
          </div>
        </div>

        <div className="py-[12px] h-[150px]">
          <div className="h-full border-r border-solid border border-primary relative mx-[26px]">
            <span className="absolute left-[-3.5px] w-[7px] h-[7px] border-primary border border-solid rounded-full bg-white top-[-3.5px]"></span>
            <span className="absolute left-[-3.5px] w-[7px] h-[7px] rounded-full bg-primary bottom-[-3.5px]"></span>
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div className="">
            <p className="text-[14px] font-semibold leading-[22px]">Da nang (DAD)</p>
            <span className="text-[12px] font-normal leading-[22px]">Da Nang Airport</span>
          </div>
          <div className="">
            <p className="text-[14px] font-semibold leading-[22px]">Ho Chi Minh City (SGN)</p>
            <span className="text-[12px] font-normal leading-[22px]">Tansonnhat Intl</span>
          </div>
        </div>
      </div>

      <div className="col-span-2">
        <div className="flex items-center mb-[10px]">
          <Image alt="" src={bambooIcon} />
          <div className="ml-[12px]">
            <p className="text-[14px] font-semibold text-text-color leading-[22px]">
              Bamboo Airways
            </p>
            <p className="flex items-center">
              <span className="text-[12px] font-normal leading-[22px]">QH-183</span>
              <span className="text-[14px] font-semibold relative bottom-[4px] mx-[4px]">.</span>
              <span className="text-[12px] font-normal leading-[22px]">Economy</span>
            </p>
          </div>
        </div>

        <div className="p-[15px] bg-[#F4F2F9] rounded-[12px]">
          <ul className="grid gap-x-[24px] gap-y-[4px] grid-cols-2">
            <li className="col-span-1">
              <p className="">
                <span className="text-[12px] font-normal leading-[22px]">Baggage </span>
                <span className="text-[14px] font-semibold leading-[22px] text-primary">20kg</span>
              </p>
            </li>
            <li className="col-span-1">
              <p className="">
                <span className="text-[12px] font-normal leading-[22px]">Aircraft </span>
                <span className="text-[14px] font-semibold leading-[22px] text-primary">
                  Airbus A321
                </span>
              </p>
            </li>
            <li className="col-span-1">
              <p className="">
                <span className="text-[12px] font-normal leading-[22px]">In-flight </span>
                <span className="text-[14px] font-semibold leading-[22px] text-primary">Meal</span>
              </p>
            </li>
            <li className="col-span-1">
              <p className="">
                <span className="text-[12px] font-normal leading-[22px]">Seat layout </span>
                <span className="text-[14px] font-semibold leading-[22px] text-primary">3-3</span>
              </p>
            </li>
            <li className="col-span-1">
              <p className="">
                <span className="text-[12px] font-normal leading-[22px]">In-flight </span>
                <span className="text-[14px] font-semibold leading-[22px] text-primary">
                  Entertainment
                </span>
              </p>
            </li>
            <li className="col-span-1">
              <p className="">
                <span className="text-[12px] font-normal leading-[22px]">Seat pitch </span>
                <span className="text-[14px] font-semibold leading-[22px] text-primary">
                  29 inches (standard)
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
