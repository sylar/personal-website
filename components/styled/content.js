import React from 'react'
import styled from 'react-emotion'
import MarkdownElement from '../MarkdownElement'

const Bold = styled('strong')(({customCss}) => ({...customCss}))

const Italic = styled('em')(({customCss}) => ({...customCss}))

const P = styled('p')(({customCss}) => ({...customCss}))

const components = {Bold, Italic, P}

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

export {components, Paragraph}
