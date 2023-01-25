import React from 'react'
import { formatDate } from '../../../utils/utils'
import {
  PreviousWorkplacesListItem,
  PreviousWokplacesLists,
  PreviousWorkplaceList
} from './styled'
import { PreviousComponentProps } from './types'

const PreviousWorplaces = (props: PreviousComponentProps): JSX.Element => {
  const fisrtHalfLength = Math.ceil(props.workplaces.length / 2)
  const fisrtHalf = props.workplaces.slice(0, fisrtHalfLength)

  const secondHalf = props.workplaces.slice(
    fisrtHalfLength,
    props.workplaces.length
  )

  return (
    <PreviousWokplacesLists>
      {[fisrtHalf, secondHalf].map((set, id) => {
        return (
          <PreviousWorkplaceList key={`previousWp_${id}`}>
            {set.map((wp, idx) => {
              return (
                <PreviousWorkplacesListItem key={`previousWp_${idx}`}>
                  <strong>{wp.type}</strong>
                  {wp.company}{' '}
                  <div>
                    {wp.jobTitle}, {formatDate(new Date(wp.startDate))} -{' '}
                    {formatDate(new Date(wp.endDate))}
                  </div>
                </PreviousWorkplacesListItem>
              )
            })}
          </PreviousWorkplaceList>
        )
      })}
    </PreviousWokplacesLists>
  )
}

export default PreviousWorplaces
