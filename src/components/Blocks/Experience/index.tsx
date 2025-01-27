'use client'

import { ExperienceBlockHeadingComponent } from './heading'
import { MainExperienceBlock } from './styled'
import { ExperienceBlockContentType } from './types'
import { ExperienceBlockContent } from './content'
import { getResumeCondensed } from '../../../context/resumeCondensed.context'
import SectionBlock from '../Section'

const ExperienceSection = ({
  isDetailedView
}: Pick<ExperienceBlockContentType, 'isDetailedView'>) => {
  const { displayedWorkplaces } = getResumeCondensed()
  return (
    <SectionBlock title="Experience">
      {displayedWorkplaces.map((item, key) => (
        <ExperienceBlockComponent
          key={`xp_block_${key}`}
          experienceItem={item}
          isDetailedView={isDetailedView}
        />
      ))}
    </SectionBlock>
  )
}

const ExperienceBlockComponent = ({
  experienceItem,
  isDetailedView
}: ExperienceBlockContentType) => {
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
      <ExperienceBlockContent
        experienceItem={experienceItem}
        isDetailedView={isDetailedView}
      />
    </MainExperienceBlock>
  )
}

export default ExperienceSection
