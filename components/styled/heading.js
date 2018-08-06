/* eslint-disable camelcase */
import React from 'react'
import styled from 'react-emotion'
import ReactMarkdown from 'react-markdown'
import MarkdownElement from '../MarkdownElement'

const commonStyle = {
  marginTop: '1.5rem',
  marginBottom: '1.5rem',
  fontWeight: 300
}

const H1 = styled('h1')(({customCss}) => ({
  ...commonStyle,
  fontSize: '3rem',
  ...customCss
}))

const H2 = styled('h2')(({customCss}) => ({
  ...commonStyle,
  fontSize: '2rem',
  ...customCss
}))

const H3 = styled('h3')(({customCss}) => ({
  ...commonStyle,
  fontSize: '1rem',
  ...customCss
}))

const H4 = styled('h3')(({customCss}) => ({
  ...commonStyle,
  fontSize: '1rem',
  fontWeight: 400,
  ...customCss
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

const Heading = ({md, customCss, overridenLevel}) =>
  console.log({md}) || (
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

export {Heading, H1, H2, H3}
