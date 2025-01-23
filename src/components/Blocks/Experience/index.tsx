'use client'

import { ExperienceBlockHeadingComponent } from './heading'
import { MainExperienceBlock } from './styled'
import { Experience } from './types'
import { ExperienceBlockContent } from './content'
import { getResumeCondensed } from '../../../context/resumeCondensed.context'
import { SectionBlock } from '../Section/styled'

const ExperienceSection = () => {
  const { displayedWorkplaces } = getResumeCondensed()
  return (
    <SectionBlock title="Experience">
      {displayedWorkplaces.map((item, key) => (
        <ExperienceBlockComponent
          key={`xp_block_${key}`}
          experienceItem={item}
        />
      ))}
    </SectionBlock>
  )
}

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

export default ExperienceSection
