import React, {Fragment} from 'react'
import Header from '../../sliceHeader'
import Content from './content'
import {Section} from '../..'

const Slice = ({items, headerText}) => (
  <Section>
    <Header headerText={headerText} />
    {items.map((item, key) => (
      <Fragment key={key}>
        <Content {...item} />
      </Fragment>
    ))}
  </Section>
)

export default Slice
