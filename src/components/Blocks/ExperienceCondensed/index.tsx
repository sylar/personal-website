import Heading from './heading'
import Content from './content'
import { ExperienceBlock } from '../Experience/styled'

const ExperienceCondensedBlockComponent = ({ job }: any): any => {
  return (
    <ExperienceBlock>
      <Heading job={job} />
      <Content job={job.clientsByTiers.tierA} />
    </ExperienceBlock>
  )
}

export default ExperienceCondensedBlockComponent
