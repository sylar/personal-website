import React from 'react'
import styled from 'react-emotion'
import MarkdownElement from '../MarkdownElement'

const Bold = styled('strong')(({customCss}) => ({...customCss}))

const Italic = styled('em')(({customCss}) => ({...customCss}))

const P = styled('p')(({customCss}) => ({
  marginTop: '0rem',
  marginBottom: '1.5rem',
  ...customCss
}))

const Span = styled('span')(({customCss}) => ({...customCss}))

const Div = styled('div')(({customCss}) => ({...customCss}))

const Article = styled('article')(({customCss}) => ({...customCss}))

const HR = styled('hr')({
  border: '1px solid',
  margin: '-1px 0'
})

const ParagraphRenderer = ({children, customCss, passThrough}) => (
  <P customCss={customCss}>
    {children} {passThrough}
  </P>
)

const Paragraph = ({md, customCss, children: passThrough}) => (
  <MarkdownElement
    text={md}
    renderers={{
      paragraph: ({children}) =>
        ParagraphRenderer({children, customCss, passThrough})
    }}
  />
)

Paragraph.displayName = 'Paragraph'
ParagraphRenderer.displayName = 'ParagraphRenderer'
Bold.displayName = 'Bold'
Italic.displayName = 'Italic'
P.displayName = 'P'
Span.displayName = 'Span'
Div.displayName = 'Div'
Article.displayName = 'Article'
HR.displayName = 'HR'

export {Bold, Italic, P, Span, Paragraph, Div, Article, HR}
