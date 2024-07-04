import { useState } from 'react'

export const useToggle = <T extends boolean>(init: T = false as T) => {
  const [isOn, setValue] = useState<T>(init)

  const toggle = () => setValue((prev) => !prev as T)

  return [isOn, toggle as () => void] as const
}
