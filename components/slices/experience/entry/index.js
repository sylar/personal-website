import React, {Fragment} from 'react'
import Header from './header'
import Body from './body'
import {LI, Article} from '../../..'

const Entry = ({
  type,
  title,
  company,
  startDate,
  endDate,
  currentJob,
  tasks,
  techStack
}) => (
  <Article
    customCss={{
      padding: '.75rem 0',
      '@media print': {
        padding: '1.5rem 0'
      }
    }}
  >
    <Header
      type={type}
      title={title}
      company={company}
      startDate={startDate}
      endDate={endDate}
      currentJob={currentJob}
    />
    <Body tasks={tasks} techStack={techStack} />
  </Article>
)

Entry.displayName = 'EntryContent'

export default Entry
