import React from 'react'
import { UL, LI, A, Section } from '../../..'

const TechStackItem = ({ url, name }) => (
  <LI
    customCss={{
      listStyle: 'none',
      marginRight: '.375rem',
      '@media print': {
        marginRight: '.375rem',
        listStyle: 'none'
      }
    }}
  >
    <A href={url} target="_blank">
      {name}
    </A>
  </LI>
)

const TechStack = ({ techStack }) => (
  <Section>
    <UL
      customCss={{
        fontSize: '.7rem',
        lineHeight: '.75rem',
        marginBottom: '.75rem',
        paddingLeft: 0,
        display: 'flex',
        flexWrap: 'wrap',
        '@media print': {
          fontSize: '.6rem'
        }
      }}
    >
      {techStack
        .filter(i => !!i)
        .map((item = { url: '', name: '' }, key) => (
          <TechStackItem key={key} url={item.url} name={item.name} />
        ))}
    </UL>
  </Section>
)

export default TechStack
