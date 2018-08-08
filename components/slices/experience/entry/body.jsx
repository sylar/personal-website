import React from 'react'
import {TechStack, Section, UL, ListItem} from '../../..'

const EntryBody = ({techStack, tasks}) => (
  <Section>
    <TechStack techStack={techStack} />
    <UL customCss={{margin: 0, paddingLeft: 0}}>
      {tasks.map((task, key) => (
        <ListItem
          key={key}
          md={task}
          customCss={{
            textAlign: 'justify',
            margin: '.75rem 0',
            '@media print': {margin: '0.375rem 0'},
            listStyle: 'none'
          }}
        />
      ))}
    </UL>
  </Section>
)

EntryBody.displayName = 'EntryBody'

export default EntryBody
