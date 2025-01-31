import { formatDate } from '../../../utils/utils'
import { MutedNormalFontWeight } from '../../Header/styled'
import {
  ExperienceHeading,
  JobCompany,
  JobDuration,
  JobName,
  JobRole
} from './styled'
import { CompanyHeader, Job } from './types'

const JobDurationComponent = (props: Pick<Job, 'startDate' | 'endDate'>) => {
  const start = formatDate(new Date(props.startDate))
  const isCurrent = !Boolean(props.endDate)
  const toBeDisplayed = isCurrent
    ? [start, 'Current']
    : [start, formatDate(new Date(props.endDate))]

  return <JobDuration>{toBeDisplayed.join(' - ')}</JobDuration>
}

const ExperienceBlockHeadingComponent = (props: CompanyHeader) => {
  return (
    <ExperienceHeading>
      <JobCompany $isClient={props.isClient}>
        <JobName $isClient={props.isClient}>
          <strong>{props.type}</strong>
          {props.companyName}
          {props?.companyIndustry && (
            <MutedNormalFontWeight>
              ({props.companyIndustry})
            </MutedNormalFontWeight>
          )}
        </JobName>
        
        <JobRole>{props.jobTitle}</JobRole>
        {!props.isClient && (
          <JobDurationComponent
            startDate={props.startDate}
            endDate={props.endDate}
          ></JobDurationComponent>
        )}
       
      </JobCompany>
    </ExperienceHeading>
  )
}

export { ExperienceBlockHeadingComponent }
