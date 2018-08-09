import React, {Fragment} from 'react'
import Header from '../../sliceHeader'
import Content from './content'
import {UL, LI} from '../..'
import {Section} from '../..'

const Slice = ({items, headerText}) => (
  <Section>
    <Header headerText={headerText} />
    <UL customCss={{margin: 0, paddingLeft: 0}}>
      {items.map((item, key) => (
        <LI
          key={key}
          customCss={{
            textAlign: 'justify',
            marginBottom: '.75rem',
            '@media print': {margin: '0.375rem 0'},
            listStyle: 'none'
          }}
        >
          <Content {...item} />
        </LI>
      ))}
    </UL>
  </Section>
)

export default Slice
