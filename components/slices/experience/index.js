import React, {Fragment} from 'react'
import Header from '../../sliceHeader'
import Content from './content'

const Slice = ({items, headerText}) => (
  <Fragment>
    <Header headerText={headerText} />
    {items.map((item, key) => (
      <Fragment key={key}>
        <Content {...item} />
      </Fragment>
    ))}
  </Fragment>
)

export default Slice
