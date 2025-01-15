import Md from '../../Md'
import { BlockList } from '../styled'
import { CondensedExperienceBlockContent } from './contentCondensed'
import { Experience } from './types'

const ExperienceBlockContent = ({
  item
}: {
  item: Experience
}): JSX.Element => {
  const hasClients = item.clients?.length > 0 ?? false

  return (
    <>
      {hasClients ? (
        <CondensedExperienceBlockContent clients={item.clients} />
      ) : (
        <Md
          components={{ ul: (props) => <BlockList {...props} /> }}
          source={item.tasks}
        />
      )}
    </>
  )
}

export { ExperienceBlockContent }
