import React from 'react'
import styled from 'react-emotion'
import MarkdownElement from '../MarkdownElement'

const Bold = styled('strong')(({customCss}) => ({...customCss}))

const Italic = styled('em')(({customCss}) => ({...customCss}))

const P = styled('p')(({customCss}) => ({
  marginTop: '0rem',
  marginBottom: '1.5rem',
  textAlign: 'justify',
  ...customCss
}))

const Span = styled('span')(({customCss}) => ({...customCss}))

const Div = styled('div')(({customCss}) => ({...customCss}))

const Article = styled('article')(({customCss}) => ({...customCss}))

const Header = styled('header')(({customCss}) => ({...customCss}))

const HR = styled('hr')(({customCss}) => ({
  border: '1px solid',
  margin: '-1px 0',
  ...customCss
}))

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
Header.displayName = 'Header'

export {Bold, Italic, P, Span, Paragraph, Div, Article, HR, Header}
