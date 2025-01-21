import Md from '../../Md'
import { BlockList } from '../styled'
import { CondensedExperienceBlockContent } from './contentCondensed'
import { ExperienceBlock } from './styled'
import { Experience } from './types'

const ExperienceBlockContent = ({
  item
}: {
  item: Experience
}): JSX.Element => {
  const hasClients = item.clients?.length > 0 ?? false

  return (
    <ExperienceBlock>
      {hasClients ? (
        <>
          <CondensedExperienceBlockContent clients={item.clients} />
        </>
      ) : (
        <Md
          components={{ ul: (props) => <BlockList {...props} /> }}
          source={item.tasks}
        />
      )}
    </ExperienceBlock>
  )
}

export { ExperienceBlockContent }
