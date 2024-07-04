import { expect, describe, it } from 'vitest'
import { calcDate } from '@/features/calc-date'

describe('calcDate', () => {
  it('Date Method', () => {
    const date = new Date(2024, 6, 4)
    const formattedDate = calcDate(date)
    expect(formattedDate).toBe('4 лип. 2024 р.')
  })

  it('UNIX Method', () => {
    const timestamp = new Date(2024, 6, 4).getTime()
    const formattedDate = calcDate(timestamp)
    expect(formattedDate).toBe('4 лип. 2024 р.')
  })
})
