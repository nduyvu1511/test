import { emailIcon, facebookIcon, instagramIcon, phoneIcon } from '@/assets'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="container py-[24px] items-center">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between h-full md:px-[24px]">
        <div className="flex-[2]">
          <ul className="flex flex-col sm:flex-row sm:items-center">
            <li className="flex items-center mb-[16px] sm:mb-[0px] sm:mr-[30px]">
              <Image alt="" src={phoneIcon} />
              <span className="text-[14px] ml-[5px] font-normal leading-[21px] text-text-color">
                Call us: +84 908 02 02 58
              </span>
            </li>
            <li className="flex items-center">
              <Image alt="" src={emailIcon} />
              <span className="text-[14px] ml-[5px] font-normal leading-[21px] text-text-color">
                Email: chucinog@gmail.com
              </span>
            </li>
          </ul>
        </div>
        <div className="flex-1 mt-[16px] md:mt-[0px]">
          <div className="flex items-center md:justify-end">
            <span className="text-[14px] ml-[5px] font-normal leading-[21px] text-text-color">
              Follow us
            </span>
            <div className="border-b border-solid border-black w-[40px] mx-[10px]"></div>
            <Image alt="" src={facebookIcon} className="mr-[10px]" />
            <Image alt="" src={instagramIcon} />
          </div>
        </div>
      </div>
    </footer>
  )
}
