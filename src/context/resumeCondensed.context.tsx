import { createStateContext } from 'react-use'
import resumeCondensed from '../data/experienceCondensed'
import {
  JOB_TYPE,
  TIERS,
  Workplace
} from '../components/Blocks/Experience/types'
import { ResumeData } from './types'

const getClientsByTier = (clients: Workplace[] = [], tier: TIERS) =>
  clients.filter((client) => client?.tier === tier)

const getResumeData = (): ResumeData => {
  const previousWorkplaces = []

  const displayedWorkplaces = resumeCondensed.reduce((acc, value) => {
    const isFreelanceGig = value.type === JOB_TYPE.FREELANCE

    if (isFreelanceGig) {
      const clientsByTiers = {
        visible: getClientsByTier(value.clients, TIERS.VISIBLE),
        hidden: getClientsByTier(value.clients, TIERS.HIDDEN)
      }

      previousWorkplaces.push(...clientsByTiers.hidden)

      return acc.concat({ ...value, clients: clientsByTiers.visible })
    }

    if (value.tier === TIERS.VISIBLE) {
      return acc.concat(value)
    }
    previousWorkplaces.push(value)

    return acc
  }, [])

  return { displayedWorkplaces, previousWorkplaces }
}

const [getResumeCondensed, ResumeCondensedProvider] =
  createStateContext(getResumeData())

export { getResumeCondensed, ResumeCondensedProvider }
