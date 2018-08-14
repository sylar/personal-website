import React, {Fragment} from 'react'
import {format} from 'date-fns'
import {Section, P, Button} from '../../components'

const printHandler = ev => {
  ev.preventDefault()
  window && window.print()
}

const LastUpdate = ({timestamp}) => {
  const DATE_FORMAT = 'LLLL io, YYYY'
  const date = format(new Date(timestamp), DATE_FORMAT)

  return (
    <Section
      customCss={{
        color: '#bdc3c7',
        margin: '1.5rem 0',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <P customCss={{margin: 0, '@media print': {marginTop: '.75rem'}}}>
        Last update: {date}
      </P>
      <Button
        name="print"
        onClick={printHandler}
        customCss={{
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          fontSize: 'inherit',
          color: 'inherit',
          textDecoration: 'underline',
          '@media print': {
            display: 'none'
          }
        }}
      >
        Print (to pdf)
      </Button>
    </Section>
  )
}

export default LastUpdate
