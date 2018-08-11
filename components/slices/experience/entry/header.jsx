import React from 'react'
import {Div, Bold, Heading, Section, A} from '../../..'
import Period from './period'

const EntryHeader = ({
  type,
  title,
  company,
  startDate,
  endDate,
  currentJob
}) => (
  <Div
    customCss={{
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      '@media (max-width: 480px)': {
        flexDirection: 'column'
      }
    }}
  >
    <Div customCss={{display: 'flex'}}>
      <Bold>{type}&nbsp;</Bold>
      <Heading
        md={title}
        overridenLevel={4}
        customCss={{
          margin: 0,
          fontWeight: 'normal'
        }}
      />
    </Div>
    <A href={company.url.value}>{company.name}</A>
    <Period start={startDate} end={endDate} current={currentJob} />
  </Div>
)

EntryHeader.displayName = 'EntryHeader'

export default EntryHeader
