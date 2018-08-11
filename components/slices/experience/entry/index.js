import React, {Fragment} from 'react'
import Header from './header'
import Body from './body'
import {Section} from '../../..'

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
  <Fragment>
    <Header
      type={type}
      title={title}
      company={company}
      startDate={startDate}
      endDate={endDate}
      currentJob={currentJob}
    />
    <Body tasks={tasks} techStack={techStack} />
  </Fragment>
)

Entry.displayName = 'EntryContent'

export default Entry
