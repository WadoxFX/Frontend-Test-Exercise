import { ComponentProps } from 'react'

import clsx from 'clsx'

type ButtonSizes = 'small' | 'medium' | 'large'
type ButtonVariants = 'default' | 'outlined' | 'contained'
interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
  variant?: ButtonVariants
  size?: ButtonSizes
}

const variants = {
  default: 'bg-transparent text-black',
  outlined: 'border-1 border-gray-300 bg-white transition-all delay-100 hover hover:bg-gray-50',
  contained: 'bg-black text-white transition-all delay-100 hover hover:shadow-[0px_4px_20px_-6px_rgba(100,226,183,1)]',
}

const sizes = {
  small: 'py-1 px-3 rounded-lg',
  medium: 'py-3 px-5 rounded-xl',
  large: 'py-4 px-6 rounded-2xl',
}

export const Button: React.FC<ButtonProps> = ({ children, className, variant = "default", size = "small", ...props }) => (
  <button
    {...props}
    className={clsx(className, variants[variant], sizes[size])}
  >
    {children}
  </button>
)