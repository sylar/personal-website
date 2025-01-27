'use client'

import { createContext, useContext, useState } from 'react'
import resumeCondensed from '../data/experienceCondensed'
import {
  ExperienceBlockContentType,
  JOB_TYPE,
  TIERS,
  Workplace
} from '../components/Blocks/Experience/types'
import { ResumeData } from './types'

const getClientsByTier = (clients: Workplace[] = [], tier?: TIERS) => {
  if (!tier) {
    return { visible: clients, hidden: [] }
  }

  return clients.reduce(
    (acc, client) => {
      if (client?.tier === tier) {
        return { ...acc, visible: acc.visible.concat(client) }
      }

      return { ...acc, hidden: acc.hidden.concat(client) }
    },
    { visible: [], hidden: [] }
  )
}
const getResumeData = (isDetailedView: boolean): ResumeData => {
  const previousWorkplaces = []

  const displayedWorkplaces = resumeCondensed.reduce((acc, value) => {
    const isFreelanceGig = value.type === JOB_TYPE.FREELANCE

    if (isFreelanceGig) {
      const clientsByTiers = getClientsByTier(
        value.clients,
        isDetailedView ? undefined : TIERS.VISIBLE
      )

      previousWorkplaces.push(...clientsByTiers.hidden)

      return acc.concat({ ...value, clients: clientsByTiers.visible })
    }

    if (isDetailedView || value.tier === TIERS.VISIBLE) {
      return acc.concat(value)
    } else {
      previousWorkplaces.push(value)
    }
    return acc
  }, [])

  return { displayedWorkplaces, previousWorkplaces }
}

const ResumeCondensedContext = createContext<ResumeData | undefined>(undefined)

const ResumeCondensedProvider: React.FC<
  { children: React.ReactNode } & Pick<
    ExperienceBlockContentType,
    'isDetailedView'
  >
> = ({ children, isDetailedView }) => {
  const [resumeData] = useState<ResumeData>(getResumeData(isDetailedView))

  return (
    <ResumeCondensedContext.Provider value={resumeData}>
      {children}
    </ResumeCondensedContext.Provider>
  )
}

const getResumeCondensed = () => {
  const context = useContext(ResumeCondensedContext)
  if (context === undefined) {
    throw new Error(
      'getResumeCondensed must be used within a ResumeCondensedProvider'
    )
  }
  return context
}

export { getResumeCondensed, ResumeCondensedProvider }