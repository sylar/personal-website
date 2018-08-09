import React, {Fragment} from 'react'
import Header from '../../sliceHeader'
import Content from './content'

const Slice = ({description, headerText}) => (
  <Fragment>
    <Header headerText={headerText} />
    <Content description={description} />
  </Fragment>
)

export default Slice
