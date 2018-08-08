import React from 'react'
import {format, differenceInCalendarMonths} from 'date-fns'
import {Section} from '../../..'

const Period = ({start, end, current, customCss}) => {
  const isCurrent = current === 'Yes'
  const DATE_FORMAT = 'MMM YYYY'
  const startDate = format(new Date(start), DATE_FORMAT)
  const endDate = isCurrent ? 'present' : format(new Date(end), DATE_FORMAT)
  const difference = isCurrent
    ? 0
    : differenceInCalendarMonths(new Date(start), new Date(end))

  return (
    <Section customCss={customCss}>
      {startDate} - {endDate}
      {/* {!isCurrent && <Span>{difference} months</Span>} */}
    </Section>
  )
}

Period.displayName = 'Period'
Period.defaultProps = {
  current: 'No'
}

export default Period
