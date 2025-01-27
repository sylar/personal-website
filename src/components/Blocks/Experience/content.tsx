'use client'

import Md from '../../Md'
import { BlockList } from '../styled'
import { CondensedExperienceBlockContent } from './contentCondensed'
import { ExperienceBlock, TasksList } from './styled'
import { ExperienceBlockContentType } from './types'

const ExperienceBlockContent = ({
  experienceItem,
  isDetailedView
}: ExperienceBlockContentType) => {
  const hasClients = experienceItem.clients?.length > 0

  return (
    <ExperienceBlock>
      {hasClients ? (
        <>
          <CondensedExperienceBlockContent
            clients={experienceItem.clients}
            isDetailedView={isDetailedView}
          />
        </>
      ) : (
        <TasksList>
          <Md
            components={{ ul: (props) => <BlockList {...props} /> }}
            source={
              isDetailedView
                ? experienceItem.tasksDetails
                : experienceItem.tasks
            }
          />
        </TasksList>
      )}
    </ExperienceBlock>
  )
}

export { ExperienceBlockContent }
