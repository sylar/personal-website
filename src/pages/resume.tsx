import HeaderComponent from '../components/Header'
import { Sizes } from '../lib/styles/global'
import ExperienceBlock from '../components/Blocks/Experience'
import experienceData from '../lib/data/experince'
import personalData from '../lib/data/personal'
import projectsData from '../lib/data/projects'
import SectionBlock from '../components/Blocks/Section'
import EducationBlock from '../components/Blocks/Education'
import ProjectsBlock from '../components/Blocks/Projects'
import HobbiesBlock from '../components/Blocks/Hobbies'
import { ResumePageProps } from '../lib/pageTypes'

const ResumePage = ({
  personalData,
  experienceData,
  projectsData
}: ResumePageProps): JSX.Element => (
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
            type: xp.type
          }}
        />
      ))}
    </SectionBlock>
    <SectionBlock title="Education">
      <EducationBlock education={personalData.education} />
    </SectionBlock>
    <SectionBlock title="Side Projects">
      <ProjectsBlock projects={projectsData} />
    </SectionBlock>
    <SectionBlock title="Hobbies">
      <HobbiesBlock content={personalData.hobbies} />
    </SectionBlock>
  </>
)

export async function getStaticProps(): Promise<{ props: ResumePageProps }> {
  return {
    props: {
      personalData,
      experienceData,
      projectsData
    }
  }
}

export default ResumePage
