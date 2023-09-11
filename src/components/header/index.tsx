import { closeIcon, logoIcon, menuIcon, usaIcon, vietnamIcon } from '@/assets'
import { useModal, useScrollTop } from '@/hooks'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Modal } from '../modal'

type HeaderProps = {
  className?: string
}

export const Header = ({ className }: HeaderProps) => {
  const { closeModal, openModal, visible } = useModal()
  const height = useScrollTop()

  return (
    <div
      className={classNames(
        'absolute top-[0px] right-[0px] left-[0px] z-[100] h-header',
        height >= 80 && 'sticky bg-white'
      )}
    >
      <div className={twMerge(classNames('container h-header items-center', className))}>
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center">
            <Link className="hover:border-0" href={'/'}>
              <Image src={logoIcon} alt="" className="w-[120px] sm:w-[144px]" />
            </Link>
            <div className="items-center ml-[12px] hidden lg:flex">
              <Image src={vietnamIcon} alt="" className="mr-[8px]" />
              <Image src={usaIcon} alt="" />
            </div>
          </div>
          <div className="flex-1 justify-center hidden lg:flex">
            <ul className="flex items-center">
              {['Promotion', 'Flight Schedule', 'About us', 'Payment Guide'].map((label, index) => (
                <li className="mr-[30px]" key={index}>
                  <Link href={'/'}>
                    <p className="text-sm text-text-color font-normal leading-[21px] hover:text-primary">
                      {label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <button className="btn">Booking now</button>
            <button onClick={openModal} className="lg:hidden ml-[12px]">
              <Image alt="" src={menuIcon} />
            </button>
          </div>
        </div>
      </div>

      <Modal
        visible={visible}
        onClose={closeModal}
        animationType="slideFromRight"
        headerClassName="hidden"
        modalClassName="h-full w-full max-w-[350px] fixed left-[0px] rounded-[0px]"
      >
        <div className="py-[12px] px-[12px] flex justify-end">
          <button onClick={closeModal}>
            <Image alt="" src={closeIcon} />
          </button>
        </div>
        <ul className="mb-[12px]">
          {['Promotion', 'Flight Schedule', 'About us', 'Payment Guide'].map((label, index) => (
            <li className="mr-[30px] px-[12px] py-[16px]" key={index}>
              <Link href={'/'}>
                <p className="text-sm text-text-color font-normal leading-[21px] hover:text-primary">
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center px-[12px]">
          <Image src={vietnamIcon} alt="" className="mr-[16px]" />
          <Image src={usaIcon} alt="" />
        </div>
      </Modal>
    </div>
  )
}
