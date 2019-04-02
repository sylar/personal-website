import React from 'react'
import { format, differenceInCalendarMonths } from 'date-fns'
import { Div } from '../../..'

const Period = ({ start, end, current }) => {
  const isCurrent = current
  const DATE_FORMAT = 'MMM YYYY'
  const startDate = format(new Date(start), DATE_FORMAT)
  const endDate = isCurrent ? 'present' : format(new Date(end), DATE_FORMAT)
  const difference = isCurrent
    ? 0
    : differenceInCalendarMonths(new Date(start), new Date(end))

  return (
    <Div>
      {startDate} - {endDate}
      {/* {!isCurrent && <Span>{difference} months</Span>} */}
    </Div>
  )
}

Period.displayName = 'Period'
Period.defaultProps = {
  current: 'No'
}

export default Period
