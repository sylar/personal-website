import { ExperienceBlockContent } from './content'
import { ExperienceBlockHeadingComponent } from './heading'
import { CondensedExperienceBlock, ExperienceBlock } from './styled'
import { Experience, ExperienceBlockContentType } from './types'

type CondensedExperienceBlockContentProps = Pick<Experience, 'clients'> &
  Pick<ExperienceBlockContentType, 'isDetailedView'>

const CondensedExperienceBlockContent = ({
  clients,
  isDetailedView
}: CondensedExperienceBlockContentProps) => (
  <ExperienceBlock $isCondensed>
    {clients.map((client) => (
      <CondensedExperienceBlock key={`client_${client.startDate}`}>
        <ExperienceBlockHeadingComponent
          companyName={client.companyName}
          companyIndustry={client.companyIndustry}
          companyDescription={client.companyDescription}
          startDate={client.startDate}
          endDate={client.endDate}
          companyUrl={client.companyUrl}
          isClient
        />
        <ExperienceBlockContent
          experienceItem={client}
          isDetailedView={isDetailedView}
        />
      </CondensedExperienceBlock>
    ))}
  </ExperienceBlock>
)

export { CondensedExperienceBlockContent }
