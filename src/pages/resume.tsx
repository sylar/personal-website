import HeaderComponent from '../components/Header'
import { Sizes } from '../lib/styles/global'
import ExperienceBlock from '../components/Blocks/Experience'
import experienceData from '../lib/data/experince'
import personalData from '../lib/data/personal'
import projectsData from '../lib/data/projects'
import { JobType } from '../components/Blocks/Experience/types'
import SectionBlock from '../components/Blocks/Section'
import EducationBlock from '../components/Blocks/Education'
import ProjectsBlock from '../components/Blocks/Projects'

const ResumePage = (): JSX.Element => (
  <>
    <HeaderComponent size={Sizes.SMALL} />
    <SectionBlock title="Experience">
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
    </SectionBlock>
    <SectionBlock title="Side Projects">
      <ProjectsBlock projects={projectsData} />
    </SectionBlock>
    <SectionBlock title="Education">
      <EducationBlock
        degree={personalData.education.degree}
        institution={personalData.education.institution}
        startYear={personalData.education.startYear}
        endYear={personalData.education.endYear}
      />
    </SectionBlock>
  </>
)

export default ResumePage
