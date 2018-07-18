// @flow
import * as React from 'react'
import MarkdownElement from './MarkdownElem'

type Props = {
  children?: React.Node
}

export default ({title, logo, description}) => {
  console.log('KUIII', {title, logo, description})
  return (
    <React.Fragment>
      <MarkdownElement
        text={title}
        customStyle={`h2 {
        font-weight: 200;
        margin-bottom: 0;
        margin-top: 1.5rem;
      }`}
      />
    </React.Fragment>
  )
}
