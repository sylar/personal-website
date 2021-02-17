import { ExperienceBlockProps } from './types'
import Heading from './heading'
import Content from './content'
import { ExperienceBlock } from './styled'

const ExperienceBlockComponent = ({
  company,
  job
}: ExperienceBlockProps): JSX.Element => {
  return (
    <ExperienceBlock type={job.type}>
      <Heading company={company} job={job} />
      <Content
        duties={job.duties}
        description={company.description}
        jobs={job.jobs || []}
      />
    </ExperienceBlock>
  )
}

export default ExperienceBlockComponent
