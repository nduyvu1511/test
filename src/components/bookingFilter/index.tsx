import { arrowDownIcon } from '@/assets'
import classNames from 'classnames'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export const BookingFilter = () => {
  return (
    <div className="">
      <div className="flex items-center justify-end">
        <span className="uppercase text-[12px] font-semibold opacity-50 mr-[14px]">FILTER</span>
        {['Transit', 'Time', 'Airline', 'Low Price'].map((label, index) => (
          <FilterItem label={label} key={index} className="mr-[5px] last:mr-[0px]" />
        ))}
      </div>
    </div>
  )
}

type FilterItemProps = {
  label: string
  className?: string
}

const FilterItem = ({ label, className }: FilterItemProps) => {
  return (
    <div
      className={twMerge(
        classNames(
          'px-[15px] py-[8px] rounded-[12px] bg-white min-w-[120px] flex items-center justify-between',
          className
        )
      )}
    >
      <p className="flex-1 text-[12px] font-normal leading-[18px] line-clamp-1">{label}</p>
      <Image alt="" src={arrowDownIcon} />
    </div>
  )
}
