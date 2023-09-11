import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

export type CheckboxProps = {
  label?: string
  className?: string
  active?: boolean
  onPress?: () => void
}

export const Checkbox = ({ label, className, active, onPress }: CheckboxProps) => {
  return (
    <>
      <div className={twMerge(classNames('flex items-center', className))}>
        <span
          onClick={onPress}
          className={classNames(
            'w-[24px] h-[24px] rounded-full bg-bg cursor-default',
            active && 'border-[6px] border-solid border-primary bg-white'
          )}
        ></span>

        <span
          onClick={onPress}
          className="ml-2 text-sm ml-[6px] font-semibold text-text-color cursor-default"
        >
          {label}
        </span>
      </div>
    </>
  )
}
