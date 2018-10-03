import React from 'react'
import {Heading} from './styled'

const SliceHeader = ({headerText, customCss}) => (
  <Heading md={headerText} customCss={{marginTop: '1.5rem', ...customCss}} />
)

SliceHeader.displayName = 'SliceHeader'

export default SliceHeader
