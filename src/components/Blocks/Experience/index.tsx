'use client'

import { getResumeCondensed } from '../../../context/resumeCondensed.context'
import SectionBlock from '../Section'
import { ExperienceBlockContent } from './content'
import { ExperienceBlockHeadingComponent } from './heading'
import { ExperienceBlock, MainExperienceBlock } from './styled'
import { ExperienceBlockContentType } from './types'

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
      <ExperienceBlock>
        <ExperienceBlockHeadingComponent
          companyName={experienceItem.companyName}
          companyIndustry={experienceItem.companyIndustry}
          companyDescription={experienceItem.companyDescription}
          startDate={experienceItem.startDate}
          endDate={experienceItem.endDate}
          companyUrl={experienceItem.companyUrl}
          type={experienceItem.type}
        />
        <ExperienceBlockContent
          experienceItem={experienceItem}
          isDetailedView={isDetailedView}
        />
      </ExperienceBlock>
    </MainExperienceBlock>
  )
}

export default ExperienceSection
