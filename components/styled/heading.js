/* eslint-disable camelcase */
import React from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'
import MarkdownElement from '../MarkdownElement'

const commonStyle = {
  fontSize: '2rem',
  marginTop: '3rem',
  marginBottom: '1.5rem',
  fontWeight: 300
}

const H1 = styled('h1')(({customCss}) => ({...commonStyle, ...customCss}))

const H2 = styled('h2')(({customCss}) => ({...commonStyle, ...customCss}))

const H3 = styled('h3')(({customCss}) => ({...commonStyle, ...customCss}))

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

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'

export {Heading, H1, H2, H3}
