/* eslint-disable camelcase */
import React from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'
import MarkdownElement from '../MarkdownElement'

const commonStyle = {
  '@media print': {
    margin: 0,
    color: 'black'
  }
}

const H1 = styled('h1')(({customCss}) => ({
  fontSize: '4.25rem',
  lineHeight: '4.5rem',
  marginTop: '1.5rem',
  marginBottom: '3rem',
  ...commonStyle,
  ...customCss
}))

const H2 = styled('h2')(({customCss}) => ({
  fontSize: '2.625rem',
  lineHeight: '3rem',
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
  ...commonStyle,
  ...customCss,
  '@media print': {
    fontSize: '2rem',
    lineHeight: 1.5,
    ...commonStyle['@media print'],
    ...customCss['@media print']
  }
}))

const H3 = styled('h3')(({customCss}) => ({
  fontSize: '1.625rem',
  lineHeight: '3rem',
  marginTop: '1.5rem',
  marginBottom: '0rem',
  ...commonStyle,
  ...customCss,
  '@media print': {
    fontSize: '1.3rem',
    lineHeight: 1.5,
    margin: 0,
    ...commonStyle['@media print'],
    ...customCss['@media print']
  }
}))

const H4 = styled('h4')(({customCss}) => ({
  fontSize: '1rem',
  lineHeight: '1.5rem',
  marginTop: '1.5rem',
  marginBottom: '0rem',
  ...commonStyle,
  ...customCss,
  '@media print': {
    fontSize: '1rem',
    lineHeight: 1.5,
    margin: 0,
    ...commonStyle['@media print'],
    ...customCss['@media print']
  }
}))

const components = {
  H1,
  H2,
  H3,
  H4
}

const getHeadingRenderer = ({
  props,
  DefaultRenderer,
  customCss,
  overridenLevel
}) => {
  const {level, children} = props
  const Component = components[`H${overridenLevel || level}`] || components.H4

  const ToBeRendered = <Component customCss={customCss}>{children}</Component>

  return ToBeRendered
}

const Heading = ({md, customCss, overridenLevel}) => (
  <MarkdownElement
    text={md}
    renderers={{
      heading: props =>
        getHeadingRenderer({
          props,
          customCss,
          DefaultRenderer: ReactMarkdown.renderers.heading,
          overridenLevel
        })
    }}
  />
)

H1.displayName = 'H1'
H2.displayName = 'H2'
H3.displayName = 'H3'
H4.displayName = 'H4'

export {Heading, H1, H2, H3, H4}
