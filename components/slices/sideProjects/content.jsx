import React, {Fragment} from 'react'
import {UL, LI, A, Paragraph} from '../..'

const Content = ({title, url, description}) => (
  <Paragraph
    md={description}
    customCss={{
      margin: 0
    }}
  >
    (<A href={url}>{title}</A>)
  </Paragraph>
)

export default Content
