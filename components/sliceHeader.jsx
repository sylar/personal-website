import React from 'react'
import {Heading} from './styled'

const SliceHeader = ({headerText}) => (
  <Heading
    md={headerText}
    customCss={{marginTop: '1.5rem', '@media print': {marginTop: '1.5rem'}}}
  />
)

SliceHeader.displayName = 'SliceHeader'

export default SliceHeader
