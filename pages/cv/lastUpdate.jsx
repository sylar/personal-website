import React, {Fragment} from 'react'
import {format} from 'date-fns'
import {Section, P} from '../../components'

const LastUpdate = ({timestamp}) => {
  console.log({timestamp})
  const DATE_FORMAT = 'LLLL io, YYYY'
  const date = format(new Date(timestamp), DATE_FORMAT)

  return (
    <Section
      customCss={{
        color: '#bdc3c7',
        margin: '1.5rem 0'
      }}
    >
      <P customCss={{margin: 0}}>Last update: {date}</P>
    </Section>
  )
}

export default LastUpdate
