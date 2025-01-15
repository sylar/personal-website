import { Company, ExperienceBlockHeadingProps } from './types'
import { Div } from '../../../styles/global'
import { JobName, JobCompany } from './styled'
import { BlockHeading } from '../styled'

const JobNameComponent = (
  props: Pick<Company, 'name' | 'industry'>
): JSX.Element => (
  <JobName>
    <Div>
      <strong>{props.name}</strong>
    </Div>{' '}
    <small>({props.industry})</small>
  </JobName>
)

const ExperienceBlockHeadingComponent = (
  props: ExperienceBlockHeadingProps
): JSX.Element => {
  return (
    <BlockHeading>
      <JobCompany>
        <JobNameComponent
          name={props.company.name}
          industry={props.company.industry}
        />
      </JobCompany>
    </BlockHeading>
  )
}

export default ExperienceBlockHeadingComponent
