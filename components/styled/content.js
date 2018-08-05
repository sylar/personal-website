import React from 'react'
import styled from 'react-emotion'
import MarkdownElement from '../MarkdownElement'

const Bold = styled('strong')(({customCss}) => ({...customCss}))

const Italic = styled('em')(({customCss}) => ({...customCss}))

const P = styled('p')(({customCss}) => ({margin: '1.5rem 0', ...customCss}))

const Span = styled('span')(({customCss}) => ({...customCss}))

const Div = styled('div')(({customCss}) => ({...customCss}))

const ParagraphRenderer = ({children, customCss}) => (
  <P customCss={customCss}>{children}</P>
)

const Paragraph = ({md, customCss}) => (
  <MarkdownElement
    text={md}
    renderers={{
      paragraph: ({children}) => ParagraphRenderer({children, customCss})
    }}
  />
)

Paragraph.displayName = 'Paragraph'
ParagraphRenderer.displayName = 'ParagraphRenderer'
Bold.displayName = 'Bold'
Italic.displayName = 'Italic'
P.displayName = 'P'
Span.displayName = 'Span'

export {Bold, Italic, P, Span, Paragraph, Div}
