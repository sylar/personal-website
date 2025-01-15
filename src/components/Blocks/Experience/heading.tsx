import { CompanyHeader } from './types'
import { Div } from '../../../styles/global'
import { JobName, JobCompany } from './styled'
import { BlockHeading } from '../styled'

const ExperienceBlockHeadingComponent = (props: CompanyHeader): JSX.Element => {
  return (
    <BlockHeading>
      <JobCompany>
        <JobName>
          <Div>
            <strong>{props.companyName}</strong>
          </Div>{' '}
          {props?.companyIndustry && <small>({props.companyIndustry})</small>}
        </JobName>
      </JobCompany>
    </BlockHeading>
  )
}

export { ExperienceBlockHeadingComponent }
