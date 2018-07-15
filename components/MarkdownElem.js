import React, {Fragment} from 'react'
import ReactMarkdown from 'react-markdown'
// import markdown from 'markdown-in-js'

const Wrapper = props =>
  console.log({props}) || (
    <Fragment>
      <h2>{props.children}</h2>
      <style jsx>{`
        h2 {
          color: red;
        }
      `}</style>
    </Fragment>
  )

const MarkdownElem = ({text, customStyle}) =>
  console.log(text) || (
    <ReactMarkdown source={text} renderers={{heading: Wrapper}} />
  )

MarkdownElem.displayName = 'MarkdownElement'

export default MarkdownElem
