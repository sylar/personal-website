import { CompanyHeader, Job } from './types'
import { JobName, JobCompany, JobDuration, CompanyDescription } from './styled'
import { ExperienceHeading } from './styled'
import { formatDate } from '../../../utils/utils'
import { MutedNormalFontWeight } from '../../Header/styled'

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
    <ExperienceHeading>
      <JobCompany $isClient={props.isClient}>
        <JobName $isClient={props.isClient}>
          {props.companyName}
          {props?.companyIndustry && (
            <MutedNormalFontWeight>
              ({props.companyIndustry})
            </MutedNormalFontWeight>
          )}
        </JobName>
        {!props.isClient && (
          <JobDurationComponent
            startDate={props.startDate}
            endDate={props.endDate}
          ></JobDurationComponent>
        )}
      </JobCompany>
      {!props.isClient && props?.companyDescription?.length > 0 && (
        <CompanyDescription>{props.companyDescription}</CompanyDescription>
      )}
    </ExperienceHeading>
  )
}

export { ExperienceBlockHeadingComponent }
