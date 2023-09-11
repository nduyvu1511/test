import { arrowDownIcon, calendarIcon, closeIcon, filterIcon, twoWayIcon } from '@/assets'
import { useModal } from '@/hooks'
import classNames from 'classnames'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'
import { Checkbox } from '../checkbox'
import { Modal } from '../modal'

export const BookingHomeInfo = () => {
  const { closeModal, openModal, visible } = useModal()

  return (
    <div className="">
      <div className="flex md:hidden justify-end">
        <button onClick={openModal} className="mb-[12px] ml-auto">
          <Image alt="" src={filterIcon} className="w-[20px]" />
        </button>
      </div>

      <div className="hidden md:flex flex-col md:flex-row items-center mb-[24px]">
        <div className="mr-[48px] flex items-center">
          {['One way / Round-trip', 'Multi-city'].map((label, index) => (
            <Checkbox
              className="mr-[24px] last:mr-[0px]"
              active={index === 1}
              key={index}
              label={label}
            />
          ))}
        </div>
        <div className="flex items-center mr-[48px]">
          <p className="font-semibold text-[14px] text-text-color mr-[5px]">
            <span className="text-primary">02</span> Adult, <span className="text-primary">01</span>{' '}
            children
          </p>
          <Image src={arrowDownIcon} alt="" />
        </div>
        <div className="flex items-center">
          <p className="font-semibold text-[14px] text-text-color mr-[5px]">Business Class</p>
          <Image src={arrowDownIcon} alt="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-1 flex-row">
          {/* <Item data={{ label: 'From', location: 'Quang Nam, Viet Nam', province: 'Da Nang' }} />
          <div className="flex justify-center items-center sm:w-[24px] relative z-10 h-[16px] sm:h-auto">
            <div className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] flex items-center justify-center rounded-full border border-solid border-black10 bg-white z-10 absolute">
              <Image alt="" src={twoWayIcon} />
            </div>
          </div>
          <Item active data={{ label: 'TO', location: 'Ho Chi Minh', province: 'Viet Nam' }} /> */}

          <Item data={{ label: 'From', location: 'Quang Nam, Viet Nam', province: 'Da Nang' }} />
          <div className="items-center flex relative w-[28px]">
            <div className="flex items-center justify-center">
              <Image alt="" src={twoWayIcon} />
            </div>
          </div>
          <Item active data={{ label: 'TO', location: 'Ho Chi Minh', province: 'Viet Nam' }} />
        </div>

        <div className="flex-1 flex flex-col md:flex-row mt-[20px] lg:mt-[0px] lg:ml-[20px] border border-black10 border-solid rounded-[12px] py-[12px] lg:py-[12px] px-[12px] lg:px-[24px]">
          <div className="flex-1 mb-[24px] md:mb-[0px] md:mr-[12px]">
            <p className="line-clamp-1 text-[12px] text-text-color opacity-50 font-semibold uppercase leading-[18px]">
              Departure
            </p>
            <div className="flex items-center">
              <p className="line-clamp-1 text-primary text-[18px] lg:text-[24px] font-semibold leading-[28px] lg:leading-[36px] mr-[10px]">
                Fri, 22 Mar, 2022
              </p>
              <Image alt="" src={calendarIcon} />
            </div>
            <ul className="flex">
              <li className="px-[2px] py-[4px] border-b border-solid border-black mr-[15px]">
                <p className="text-[14px] font-semibold text-text-color leading-[21px]">Prev</p>
              </li>
              <li className="px-[2px] py-[4px] opacity-40">
                <p className="text-[14px] font-semibold text-text-color leading-[21px]">Next</p>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="line-clamp-1 text-[12px] text-text-color opacity-50 font-semibold uppercase leading-[18px]">
              return
            </p>
            <div className="flex items-center">
              <p className="line-clamp-1 text-primary text-[18px] lg:text-[24px] font-semibold leading-[28px] lg:leading-[36px] mr-[10px]">
                Fri, 22 Mar, 2022
              </p>
              <Image alt="" src={calendarIcon} />
            </div>
            <ul className="flex">
              <li className="px-[2px] py-[4px] opacity-40 mr-[15px]">
                <p className="text-[14px] font-semibold text-text-color leading-[21px]">Prev</p>
              </li>
              <li className="px-[2px] py-[4px] opacity-40">
                <p className="text-[14px] font-semibold text-text-color leading-[21px]">Next</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Modal
        visible={visible}
        onClose={closeModal}
        animationType="slideFromLeft"
        headerClassName="hidden"
        modalClassName="h-full w-full max-w-[350px] fixed right-[0px] rounded-[0px]"
      >
        <div className="py-[12px] px-[12px] flex justify-end">
          <button onClick={closeModal}>
            <Image alt="" src={closeIcon} />
          </button>
        </div>
        <div className="p-[12px]">
          <div className="mb-[24px]">
            {['One way / Round-trip', 'Multi-city'].map((label, index) => (
              <Checkbox className="mb-[16px]" active={index === 1} key={index} label={label} />
            ))}
          </div>
          <div className="flex items-center mr-[48px]">
            <p className="font-semibold text-[14px] text-text-color mr-[5px] mb-[12px]">
              <span className="text-primary">02</span> Adult,{' '}
              <span className="text-primary">01</span> children
            </p>
            <Image src={arrowDownIcon} alt="" />
          </div>
          <div className="flex items-center">
            <p className="font-semibold text-[14px] text-text-color mr-[5px]">Business Class</p>
            <Image src={arrowDownIcon} alt="" />
          </div>
        </div>
      </Modal>
    </div>
  )
}

type ItemProps = {
  data: {
    label: string
    province: string
    location: string
  }
  active?: boolean
  className?: string
}

export const Item = ({ data, active, className }: ItemProps) => {
  return (
    <div className={twMerge(classNames('flex-1 relative overflow-hidden', className))}>
      {active ? (
        <div className="absolute top-[50%] transform translate-y-[-50%] w-[60px] h-[60px] border-2 border-solid border-primary rounded-full left-[-40px] bg-white z-10 "></div>
      ) : (
        <div className="absolute top-[50%] transform translate-y-[-50%] w-[60px] h-[60px] border border-solid border-black10 rounded-full right-[-40px] bg-white z-10 "></div>
      )}

      <div
        className={twMerge(
          classNames(
            'h-full rounded-[12px] py-[12px] px-[24px] md:px-[32px] lg:px-[32px] border border-black10 border-solid',
            active && 'border-primary border-2'
          )
        )}
      >
        <p className="line-clamp-1 text-[12px] text-text-color opacity-50 font-semibold uppercase leading-[18px]">
          {data.label}
        </p>
        <p className="line-clamp-1 text-primary text-[18px] lg:text-[24px] font-semibold leading-[28px] lg:leading-[36px]">
          {data.province}
        </p>
        <p className="line-clamp-1 text-text-color text-[14px] font-semibold leading-[21px]">
          {data.location}
        </p>
      </div>
    </div>
  )
}
