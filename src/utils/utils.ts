const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const formatDate = (date: Date): string => {
  const monthName = monthNames[date.getMonth()].slice(0, 3)
  const year = date.getFullYear()
  return `${monthName} ${year}`
}
