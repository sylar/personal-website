import React from 'react'
import styled from 'react-emotion'
import MarkdownElement from '../MarkdownElement'

const commonStyle = {
  marginTop: '0rem',
  marginBottom: '1.5rem',
  '@media print': {
    margin: 0,
    padding: 0
  }
}

const UL = styled('ul')(({customCss}) => ({
  ...commonStyle,
  ...customCss,
  '@media print': {
    ...commonStyle['@media print'],
    ...customCss['@media print']
  }
}))

const OL = styled('ol')(({customCss}) => ({
  ...commonStyle,
  ...customCss,
  '@media print': {
    ...commonStyle['@media print'],
    ...customCss['@media print']
  }
}))

const LI = styled('li')(({customCss}) => ({
  ...customCss,
  '@media print': {
    listStyle: 'square',
    ...commonStyle['@media print'],
    ...customCss['@media print']
  }
}))

const MdLi = ({children, customCss}) => (
  <LI customCss={customCss}>{children}</LI>
)

const ListItem = ({md, customCss}) => (
  <MarkdownElement
    text={md}
    renderers={{
      paragraph: ({children}) => MdLi({children, customCss})
    }}
  />
)

UL.displayName = 'UL'
OL.displayName = 'OL'
LI.displayName = 'LI'
ListItem.displayName = 'LI'

UL.defaultProps = {
  customCss: {}
}
OL.defaultProps = {
  customCss: {}
}
LI.defaultProps = {
  customCss: {}
}

export {UL, OL, LI, ListItem}
