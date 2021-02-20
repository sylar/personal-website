import React from 'react'
import { LI } from '../../../styles/global'
import { formatDate } from '../../../utils/utils'
import { BlockList } from '../styled'
import { PreviousWorkplacesListItem, PreviousWokplacesLists } from './styled'
import { PreviousComponentProps } from './types'

const PreviousWorplaces = (props: PreviousComponentProps): JSX.Element => {
  console.log('dasdasd', props)
  const fisrtHalfLength = Math.ceil(props.workplaces.length / 2)
  const fisrtHalf = props.workplaces.slice(0, fisrtHalfLength)

  const secondHalf = props.workplaces.slice(
    fisrtHalfLength + 1,
    props.workplaces.length
  )

  return (
    <PreviousWokplacesLists>
      {[fisrtHalf, secondHalf].map((set, id) => {
        return (
          <BlockList key={`previousWp_${id}`}>
            {set.map((wp, idx) => {
              return (
                <PreviousWorkplacesListItem key={`previousWp_${idx}`}>
                  {wp.company}: {formatDate(new Date(wp.startDate))} -{' '}
                  {formatDate(new Date(wp.endDate))}
                </PreviousWorkplacesListItem>
              )
            })}
          </BlockList>
        )
      })}
    </PreviousWokplacesLists>
  )
}

export default PreviousWorplaces
