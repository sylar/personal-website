import { ExperienceBlockProps } from './types'
import Heading from './heading'
import Content from './content'
import { ExperienceBlock } from './styled'

const ExperienceBlockComponent = ({
  company,
  job
}: ExperienceBlockProps): JSX.Element => (
  <ExperienceBlock>
    <Heading company={company} job={job} />
    <Content duties={job.duties} />
  </ExperienceBlock>
)

export default ExperienceBlockComponent
