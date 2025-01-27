'use client'

import { getResumeCondensed } from '../../../context/resumeCondensed.context'
import { formatDate } from '../../../utils/utils'
import SectionBlock from '../Section'
import {
  PreviousWorkplacesListItem,
  PreviousWorkplacesLists,
  PreviousWorkplaceList,
  PreviousWorkplaceTimePeriod
} from './styled'

const PreviousWorplacesSection = () => {
  const { previousWorkplaces } = getResumeCondensed()
  return (
    <SectionBlock title="Previous">
      <PreviousWorplaces workplaces={previousWorkplaces} />
    </SectionBlock>
  )
}

const PreviousWorplaces = (props) => {
  const fisrtHalfLength = Math.ceil(props.workplaces.length / 2)
  const fisrtHalf = props.workplaces.slice(0, fisrtHalfLength)

  const secondHalf = props.workplaces.slice(
    fisrtHalfLength,
    props.workplaces.length
  )

  return (
    <PreviousWorkplacesLists>
      {[fisrtHalf, secondHalf].map((set, id) => {
        return (
          <PreviousWorkplaceList key={`previousWp_${id}`}>
            {set.map((wp, idx) => {
              return (
                <PreviousWorkplacesListItem key={`previousWp_${idx}`}>
                  <strong>{wp.type}</strong>
                  {wp.companyName}
                  {/* {'  '} <div>({wp.companyIndustry})</div> */}
                  {wp.type === 'permanent' && (
                    <PreviousWorkplaceTimePeriod>
                      {formatDate(new Date(wp.startDate))} -{' '}
                      {formatDate(new Date(wp.endDate))}
                    </PreviousWorkplaceTimePeriod>
                  )}
                </PreviousWorkplacesListItem>
              )
            })}
          </PreviousWorkplaceList>
        )
      })}
    </PreviousWorkplacesLists>
  )
}

export default PreviousWorplacesSection
