import React from 'react'
import {Paragraph} from '../..'

const Content = ({description}) => (
  <Paragraph
    md={description}
    customCss={{
      margin: 0
    }}
  />
)

export default Content
