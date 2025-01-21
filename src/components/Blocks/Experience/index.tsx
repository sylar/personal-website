import { ExperienceBlockHeadingComponent } from './heading'
import { MainExperienceBlock } from './styled'
import { Experience } from './types'
import { ExperienceBlockContent } from './content'

const ExperienceBlockComponent = ({
  experienceItem
}: {
  experienceItem: Experience
}) => {
  return (
    <MainExperienceBlock>
      <ExperienceBlockHeadingComponent
        companyName={experienceItem.companyName}
        companyIndustry={experienceItem.companyIndustry}
        companyDescription={experienceItem.companyDescription}
        startDate={experienceItem.startDate}
        endDate={experienceItem.endDate}
        companyUrl={experienceItem.companyUrl}
      />
      <ExperienceBlockContent item={experienceItem} />
    </MainExperienceBlock>
  )
}

export default ExperienceBlockComponent
