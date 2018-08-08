import React from 'react'
import {UL, LI, A} from '.'

const TechStackItem = ({url, name}) => (
  <LI
    customCss={{
      listStyle: 'none',
      marginRight: '.375rem'
    }}
  >
    <A href={url}>{name}</A>
  </LI>
)

const TechStack = ({techStack}) => (
  <UL
    customCss={{
      fontSize: '.7rem',
      lineHeight: '.75rem',
      marginBottom: '.75rem',
      paddingLeft: 0,
      display: 'flex',
      flexWrap: 'wrap',
      '@media print': {
        margin: 0,
        marginBottom: '.75rem'
      }
    }}
  >
    {techStack.map(({url, name}, key) => (
      <TechStackItem key={key} url={url} name={name} />
    ))}
  </UL>
)

export default TechStack
