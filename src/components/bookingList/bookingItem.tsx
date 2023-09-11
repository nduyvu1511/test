import { bambooIcon, cutleryIcon, suitcaseIcon } from '@/assets'
import classNames from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Tag } from '../tag'
import { FareInfo } from './fareInfo'
import { FlightDetail } from './flightDetail'

export type BookingItem = {
  icon: string
  name: string
  fromDate: Date
  toDate: Date
  baggage: number
  serveInFlight?: 'meat'
  priceOrigin: number
  price: number
}

type BookingItemProps = {
  data: BookingItem
}

export const BookingItem = ({ data }: BookingItemProps) => {
  const [tab, setTab] = useState<'detail' | 'info' | undefined>(undefined)

  return (
    <div className="bg-white p-[20px] mb-[10px] rounded-[12px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image alt="" src={bambooIcon} />
          <p className="text-[14px] font-semibold text-text-color ml-[12px] leading-[22px]">
            {data.name}
          </p>
        </div>

        <div className="flex items-center">
          <div className="flex items-center mr-[40px]">
            <div className="">
              <p className="text-[14px] font-semibold leading-[22px] text-text-color">21:40</p>
              <Tag color="#4D46FA" title="DAD" />
            </div>
            <div className="flex flex-col items-center mx-[20px]">
              <span className="text-[14px] font-normal leading-[20px]">1h 30m</span>
              <div className="my-[4px] w-[78px] border-b-primary border-b relative">
                <span className="absolute left-[0px] w-[7px] h-[7px] border-primary border border-solid rounded-full bg-white bottom-[-3.5px]"></span>
                <span className="absolute right-[0px] w-[7px] h-[7px] rounded-full bg-primary bottom-[-3.5px]"></span>
              </div>
              <span className="text-[14px] font-normal leading-[20px]">1h 30m</span>
            </div>
            <div className="">
              <p className="text-[14px] font-semibold leading-[22px] text-text-color">23:40</p>
              <Tag color="#4D46FA" title="DAD" />
            </div>
          </div>

          <div className="flex items-center">
            <div className="mb-[4px] mr-[30px]">
              <div className="flex items-center">
                <Image alt="" src={suitcaseIcon} />
                <span className="text-[14px] font-normal ml-[7px] mr-[2px]">Baggage </span>
                <span className="text-primary text-[14px] font-semibold">20kg</span>
              </div>
              <div className="flex items-center">
                <Image alt="" src={cutleryIcon} />
                <span className="text-[14px] font-normal ml-[7px] mr-[2px]">In-flight </span>
                <span className="text-primary text-[14px] font-semibold">Meal</span>
              </div>
            </div>
            <div className="">
              <p className="text-[14px] font-normal line-through opacity-50">1,326,000 vnd</p>
              <p className="text-[14px] font-semibold text-orange">1,322,000 vnd</p>
            </div>
          </div>
        </div>

        <div className="">
          <button className="btn bg-orange md:bg-orange hover:bg-orange text-[14px] md:text-[14px]">
            Choose
          </button>
        </div>
      </div>

      <div className="mt-[24px] flex items-center">
        <ul className="flex items-center mr-[30px]">
          {[
            ['Flight detail', 'detail'],
            ['fare info', 'info'],
          ].map(([label, value], index) => (
            <li
              key={index}
              onClick={() => setTab(value as any)}
              className={classNames(
                'mr-[30px] last:mr-[0px]',
                value === tab && 'border-b border-primary border-solid cursor-pointer'
              )}
            >
              <p
                className={classNames(
                  'text-[12px] leading-[18px] uppercase font-semibold cursor-pointer',
                  value === tab ? 'text-primary' : 'opacity-50'
                )}
              >
                {label}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex-1 border-b border-black10 border-solid"></div>
      </div>

      <AnimatePresence>
        <motion.div
          initial={false} // Set to false to prevent initial animation
          animate={{ height: tab ? 'auto' : 0, opacity: tab ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        >
          <div className={tab && 'mt-[24px]'}>
            {tab === 'detail' ? (
              <motion.div
                key="detail"
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: -100, opacity: 0 }}
              >
                <FlightDetail />
              </motion.div>
            ) : tab === 'info' ? (
              <motion.div
                key="info"
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: -100, opacity: 0 }}
              >
                <FareInfo />
              </motion.div>
            ) : null}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
