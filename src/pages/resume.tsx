import HeaderComponent from '../components/Header'
import { Sizes, H6 } from '../lib/styles/global'
import ExperienceBlock from '../components/ExperienceBlock'
import experienceData from '../lib/data/experince'
import { JobType } from '../components/ExperienceBlock/types'

const ResumePage = (): JSX.Element => (
  <>
    <HeaderComponent size={Sizes.SMALL} />
    <H6>Experience</H6>
    {experienceData.map((xp, key) => (
      <ExperienceBlock
        key={`xp_block_${key}`}
        company={{
          description: xp.description,
          name: xp.company
        }}
        job={{
          duties: xp.tasks,
          startDate: xp.startDate,
          endDate: xp.endDate,
          title: xp.jobTitle,
          type: xp.type as JobType
        }}
      />
    ))}
  </>
)

export default ResumePage
