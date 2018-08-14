import React, {Fragment} from 'react'
import Header from '../../sliceHeader'
import Content from './content'
import {Section} from '../..'

const Slice = ({description, headerText}) => (
  <Section
    customCss={{
      '@media print': {
        marginTop: '.5rem'
      }
    }}
  >
    <Header headerText={headerText} />
    <Content description={description} />
  </Section>
)

export default Slice
