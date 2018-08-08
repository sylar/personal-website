import React from 'react'
import styled from 'react-emotion'
import MarkdownElement from '../MarkdownElement'

const commonStyle = {
  marginTop: '0rem',
  marginBottom: '1.5rem'
}

const UL = styled('ul')(({customCss}) => ({...commonStyle, ...customCss}))

const OL = styled('ol')(({customCss}) => ({...commonStyle, ...customCss}))

const LI = styled('li')(({customCss}) => ({...customCss}))

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

export {UL, OL, LI, ListItem}
