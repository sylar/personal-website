import { ExperienceBlockHeadingProps, Job } from '../Experience/types'
import { Div, Paragraph } from '../../../styles/global'
import { JobDuration, JobName } from '../Experience/styled'
import { BlockHeading } from '../styled'
import { formatDate } from '../../../utils/utils'

const JobDurationComponent = (
  props: Pick<Job, 'startDate' | 'endDate'>
): JSX.Element => {
  console.log('dsadad')
  const start = formatDate(new Date(props.startDate))
  const isCurrent = !Boolean(props.endDate)
  const toBeDisplayed = isCurrent
    ? [start, 'Current']
    : [start, formatDate(new Date(props.endDate))]

  return <JobDuration>{toBeDisplayed.join(' - ')}</JobDuration>
}

const JobNameComponent = (
  props: Pick<Job, 'type' | 'title' | 'industry'>
): JSX.Element => (
  <JobName>
    <Div>
      <strong>{props.type}</strong>
    </Div>
    <Div>{props.title}</Div>
    <Div>{props.industry}</Div>
  </JobName>
)

const ExperienceBlockHeadingComponent = (
  props: ExperienceBlockHeadingProps
): JSX.Element => {
  console.log({ props })
  return (
    <>
      <BlockHeading>
        <JobNameComponent
          title={props.job.title}
          type={props.job.type}
          startDate={props.job.startDate}
          endDate={props.job.endDate}
          industry={props.job.industry}
        />
        <JobDurationComponent
          startDate={props.job.startDate}
          endDate={props.job.endDate}
        />
      </BlockHeading>
      <Paragraph>{props.job.description}</Paragraph>
    </>
  )
}

export default ExperienceBlockHeadingComponent
