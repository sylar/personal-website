import React, {Fragment} from 'react'
import {UL, ListItem} from '../../..'
import TechStack from './techStack'

const EntryBody = ({techStack, tasks}) => (
  <Fragment>
    <TechStack techStack={techStack} />
    <UL
      customCss={{
        margin: 0,
        paddingLeft: 0,
        '@media print': {
          paddingLeft: '1.15rem'
        }
      }}
    >
      {tasks.map((task, key) => (
        <ListItem
          key={key}
          md={task}
          customCss={{
            textAlign: 'justify',
            margin: '.75rem 0',
            listStyle: 'none'
          }}
        />
      ))}
    </UL>
  </Fragment>
)

EntryBody.displayName = 'EntryBody'

export default EntryBody
