import { CompanyHeader, Job } from './types'
import { JobName, JobCompany, JobDuration } from './styled'
import { BlockHeading } from '../styled'
import { Paragraph } from '../../../styles/global'
import { formatDate } from '../../../utils/utils'

const JobDurationComponent = (
  props: Pick<Job, 'startDate' | 'endDate'>
): JSX.Element => {
  const start = formatDate(new Date(props.startDate))
  const isCurrent = !Boolean(props.endDate)
  const toBeDisplayed = isCurrent
    ? [start, 'Current']
    : [start, formatDate(new Date(props.endDate))]

  return <JobDuration>{toBeDisplayed.join(' - ')}</JobDuration>
}

const ExperienceBlockHeadingComponent = (props: CompanyHeader): JSX.Element => {
  return (
    <BlockHeading>
      <JobCompany>
        <JobName $isClient={props.isClient}>
          {props.companyName}
          {props?.companyIndustry && ` (${props.companyIndustry})`}
        </JobName>
        {!props.isClient && (
          <JobDurationComponent
            startDate={props.startDate}
            endDate={props.endDate}
          ></JobDurationComponent>
        )}
      </JobCompany>
      {!props.isClient && <Paragraph>{props.companyDescription}</Paragraph>}
    </BlockHeading>
  )
}

export { ExperienceBlockHeadingComponent }
