import { ExperienceBlockHeadingComponent } from './heading'
import { ExperienceBlock } from './styled'
import { Experience } from './types'
import { ExperienceBlockContent } from './content'

const ExperienceBlockComponent = ({
  experienceItem
}: {
  experienceItem: Experience
}) => {
  return (
    <ExperienceBlock>
      <ExperienceBlockHeadingComponent
        companyName={experienceItem.companyName}
        companyIndustry={experienceItem.companyIndustry}
        companyDescription={experienceItem.companyDescription}
        startDate={experienceItem.startDate}
        endDate={experienceItem.endDate}
        companyUrl={experienceItem.companyUrl}
      />
      <ExperienceBlockContent item={experienceItem} />
    </ExperienceBlock>
  )
}

export default ExperienceBlockComponent
