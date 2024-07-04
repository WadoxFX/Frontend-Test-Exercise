export const calcDate = (date: Date | number): string => {
  const unixDate = new Date(date)
  const option = Intl.DateTimeFormat('uk', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
  return option.format(unixDate)
}
