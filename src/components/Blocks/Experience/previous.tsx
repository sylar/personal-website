'use client'

import { getResumeCondensed } from '../../../context/resumeCondensed.context'
import { formatDate } from '../../../utils/utils'
import SectionBlock from '../Section'
import {
  PreviousWorkplaceJobTitle,
  PreviousWorkplaceList,
  PreviousWorkplaceName,
  PreviousWorkplacesListItem,
  PreviousWorkplacesLists,
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
  return (
    <PreviousWorkplacesLists>
      {props.workplaces.map((wp, idx) => (
        <PreviousWorkplaceList key={`previousWp_${idx}`}>
          <PreviousWorkplacesListItem>
            <PreviousWorkplaceName>
              <strong>{wp.type}</strong>
              {wp.companyName}
            </PreviousWorkplaceName>
            <PreviousWorkplaceJobTitle>{wp.jobTitle}</PreviousWorkplaceJobTitle>
            <PreviousWorkplaceTimePeriod>
              {formatDate(new Date(wp.startDate))} -{' '}
              {formatDate(new Date(wp.endDate))}
            </PreviousWorkplaceTimePeriod>
          </PreviousWorkplacesListItem>
        </PreviousWorkplaceList>
      ))}
    </PreviousWorkplacesLists>
  )
}

export default PreviousWorplacesSection
