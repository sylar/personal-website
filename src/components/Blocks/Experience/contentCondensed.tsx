import { ExperienceBlockContent } from './content'
import { ExperienceBlockHeadingComponent } from './heading'
import { CondensedExperienceBlock, ExperienceBlock } from './styled'
import { Experience } from './types'

type CondensedExperienceBlockContentProps = Pick<Experience, 'clients'>

const CondensedExperienceBlockContent = ({
  clients
}: CondensedExperienceBlockContentProps) => (
  <ExperienceBlock>
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
        <ExperienceBlockContent item={client} />
      </CondensedExperienceBlock>
    ))}
  </ExperienceBlock>
)

export { CondensedExperienceBlockContent }
