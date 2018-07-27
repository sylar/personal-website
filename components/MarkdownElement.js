import React, {Fragment} from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownElement = ({text, renderers}) => (
  <ReactMarkdown
    source={text}
    renderers={{
      ...ReactMarkdown.renderers,
      root: Fragment,
      ...renderers
    }}
  />
)

MarkdownElement.displayName = 'MarkdownElement'

export default MarkdownElement
