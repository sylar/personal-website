import React from 'react'
import Header from './header'
import Body from './body'
import {Article} from '../../..'

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
      marginTop: '1.5rem',
      '@media print': {
        pageBreakBefore: 'avoid'
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
