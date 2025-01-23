'use client'

import Md from '../../Md'
import { BlockList } from '../styled'
import { CondensedExperienceBlockContent } from './contentCondensed'
import { ExperienceBlock, TasksList } from './styled'
import { Experience } from './types'

const ExperienceBlockContent = ({ item }: { item: Experience }) => {
  const hasClients = item.clients?.length > 0

  return (
    <ExperienceBlock>
      {hasClients ? (
        <>
          <CondensedExperienceBlockContent clients={item.clients} />
        </>
      ) : (
        <TasksList>
          <Md
            components={{ ul: (props) => <BlockList {...props} /> }}
            source={item.tasks}
          />
        </TasksList>
      )}
    </ExperienceBlock>
  )
}

export { ExperienceBlockContent }
