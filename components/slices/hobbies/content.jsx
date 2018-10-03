import React from 'react'
import {Paragraph} from '../..'

const Content = ({description}) => (
  <Paragraph
    md={description}
    customCss={{
      margin: 0,
      textIndent: '1.15rem'
    }}
  />
)

export default Content
