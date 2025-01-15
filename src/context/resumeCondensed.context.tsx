import { createStateContext } from 'react-use'
import resumeCondensed from '../data/experienceCondensed'

const resumeData = resumeCondensed.reduce((acc, value) => {
  const isContract = value.type === 'contract'
  const {
    company,
    tasks,
    jobTitle,
    type,
    description,
    startDate,
    endDate,
    industry
  } = value

  if (isContract) {
    const clientsByTiers = value.clients.reduce(
      (clientsAcc, client) => {
        const { company, tasks, startDate, endDate, type, industry } = client
        if (client.tier === 1) {
          return {
            ...clientsAcc,
            tierA: clientsAcc.tierA.concat({
              company,
              tasks,
              startDate,
              endDate,
              type,
              industry
            })
          }
        }
        return {
          ...clientsAcc,
          tierB: clientsAcc.tierB.concat({
            company,
            tasks,
            startDate,
            endDate,
            type,
            industry
          })
        }
      },
      { tierA: [], tierB: [] }
    )

    return acc.concat({
      title: jobTitle,
      type,
      clientsByTiers,
      description,
      startDate,
      endDate
    })
  }

  return acc.concat({ company, tasks, startDate, endDate, type, industry })
}, [])

const [getResumeCondensed, ResumeCondensedProvider] =
  createStateContext(resumeData)

export { getResumeCondensed, ResumeCondensedProvider }
