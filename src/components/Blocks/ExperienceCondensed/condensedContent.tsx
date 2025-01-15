import { ExperienceBlockProps } from '../Experience/types'
import Heading from '../Experience/heading'
import Content from '../Experience/content'
import { CondensedExperienceBlock } from '../Experience/styled'

const ExperienceBlockComponent = ({
  company,
  job
}: ExperienceBlockProps): any => {
  return (
    <CondensedExperienceBlock>
      <Heading company={company} job={job} />
      <Content
        duties={job.duties}
        description={company.description}
        jobs={job.jobs || []}
      />
    </CondensedExperienceBlock>
  )
}

export default ExperienceBlockComponent
