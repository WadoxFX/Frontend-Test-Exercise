import { ComponentProps } from 'react'

import clsx from 'clsx'

type InputSizes = 'small' | 'medium' | 'large'
interface InputProps extends ComponentProps<'input'> {
  iSize?: InputSizes
}

const sizes = {
  small: 'py-1 px-3 rounded-lg',
  medium: 'py-3 px-5 rounded-xl',
  large: 'py-5 px-7 rounded-2xl',
}

export const Input: React.FC<InputProps> = ({ className, iSize = "small", ...props }) => (
  <input className={clsx(className, 'outline-none border-1 border-gray-300', sizes[iSize])} {...props} />
)
