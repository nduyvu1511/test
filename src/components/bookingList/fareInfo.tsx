import { bambooIcon } from '@/assets'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'

export const FareInfo = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="">
        <p className="text-[14px] font-semibold leading-[21px] mb-[15px] uppercase">Conditions</p>
        <div className="">
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
        </div>

        <div className="flex items-center">
          <p className="text-[14px] font-normal leading-[20px]">Da Nang</p>
          <div className="mx-[6px] w-[63px] border-b-primary border-b relative">
            <span className="absolute left-[0px] w-[7px] h-[7px] border-primary border border-solid rounded-full bg-white bottom-[-3.5px]"></span>
            <span className="absolute right-[0px] w-[7px] h-[7px] rounded-full bg-primary bottom-[-3.5px]"></span>
          </div>
          <span className="text-[12px] font-normal leading-[20px]">Ho Chi Minh City</span>
        </div>
        <p className="text-[14px] font-normal leading-[20px] text-primary">Economy</p>
        <p className="text-[12px] font-normal leading-[20px] mt-[15px]">Non - Refundable</p>
      </div>

      <div className="col-span-2">
        <p className="text-[14px] font-semibold leading-[21px] mb-[15px] uppercase">
          price details
        </p>

        <ul className="">
          {[
            ['Adult Basic Fare(x1)', '1,326,000 vnd'],
            ['Tax', 'included'],
            ['Regular Total Price', '1,326,000 vnd'],
            ['Save', '-4000 vnd'],
          ].map(([label, value], index) => (
            <li key={index} className="flex items-center justify-between mb-[8px] last:mb-[0px]">
              <p
                className={classNames(
                  'text-[14px] font-normal leading-[24px]',
                  index === 3 ? 'text-orange' : 'text-text-color'
                )}
              >
                {label}
              </p>
              <p
                className={classNames(
                  'text-[14px] leading-[24px]',
                  index === 0 ? 'font-semibold' : 'font-normal'
                )}
              >
                {value}
              </p>
            </li>
          ))}
          {/* <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">Adult Basic Fare(x1)</p>
            <p className="text-[14px] leading-[24px] font-semibold">1,326,000 vnd</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">Adult Basic Fare(x1)</p>
            <p className="text-[14px] font-normal leading-[24px]">1,326,000 vnd</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">Adult Basic Fare(x1)</p>
            <p className="text-[14px] font-normal leading-[24px]">1,326,000 vnd</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">Adult Basic Fare(x1)</p>
            <p className="text-[14px] font-normal leading-[24px]">1,326,000 vnd</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">Adult Basic Fare(x1)</p>
            <p className="text-[14px] font-normal leading-[24px]">1,326,000 vnd</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">Adult Basic Fare(x1)</p>
            <p className="text-[14px] font-normal leading-[24px]">1,326,000 vnd</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">Adult Basic Fare(x1)</p>
            <p className="text-[14px] font-normal leading-[24px]">1,326,000 vnd</p>
          </li>
          <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">Adult Basic Fare(x1)</p>
            <p className="text-[14px] font-normal leading-[24px]">1,326,000 vnd</p>
          </li> */}

          <div className="border-t border-solid border-black10 my-[5px]"></div>

          <li className="flex items-center justify-between">
            <p className="text-[14px] font-normal leading-[24px]">You pay</p>
            <p className="text-[14px] font-semibold leading-[24px] text-orange">1,322,000 vnd</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
