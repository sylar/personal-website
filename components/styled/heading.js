/* eslint-disable camelcase */
import React from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'
import MarkdownElement from '../MarkdownElement'

const H1 = styled('h1')(({customCss}) => ({...customCss}))

const H2 = styled('h2')(({customCss}) => ({...customCss}))

const H3 = styled('h3')(({customCss}) => ({...customCss}))

const components = {
  H1,
  H2,
  H3
}

const getHeadingRenderer = ({props, DefaultRenderer, customCss}) => {
  const {level, children} = props
  const Component = components[`H${level}`]

  const ToBeRendered = (
    <Component customCss={customCss}>{children}</Component>
  ) || <DefaultRenderer {...props} />

  return ToBeRendered
}

const Heading = ({md, customCss}) => (
  <MarkdownElement
    text={md}
    renderers={{
      heading: props =>
        getHeadingRenderer({
          props,
          customCss,
          DefaultRenderer: ReactMarkdown.renderers.Heading
        })
    }}
  />
)

export {Heading, H1, H2, H3}
