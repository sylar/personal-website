import { Fragment } from 'react'
import { ExperienceBlockContent } from './content'
import { ExperienceBlockHeadingComponent } from './heading'
import { ExperienceBlock } from './styled'
import { Experience } from './types'

type CondensedExperienceBlockContentProps = Pick<Experience, 'clients'>

const CondensedExperienceBlockContent = ({
  clients
}: CondensedExperienceBlockContentProps) => (
  <ExperienceBlock>
    {clients.map((client) => (
      <Fragment key={`client_${client.startDate}`}>
        <ExperienceBlockHeadingComponent
          companyName={client.companyName}
          companyIndustry={client.companyIndustry}
          companyDescription={client.companyDescription}
          startDate={client.startDate}
          endDate={client.endDate}
          companyUrl={client.companyUrl}
        />
        <ExperienceBlockContent
          key={`tierA_${client.startDate}`}
          item={client}
        />
      </Fragment>
    ))}
  </ExperienceBlock>
)

export { CondensedExperienceBlockContent }
