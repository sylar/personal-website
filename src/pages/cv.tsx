import HeaderComponent from '../components/Header'
import { Sizes } from '../styles/global'
import ExperienceBlock from '../components/Blocks/Experience'
import experienceData from '../data/experince'
import personalData from '../data/personal'
import projectsData from '../data/projects'
import SectionBlock from '../components/Blocks/Section'
import EducationBlock from '../components/Blocks/Education'
import ProjectsBlock from '../components/Blocks/Projects'
import HobbiesBlock from '../components/Blocks/Hobbies'

const ResumePage = (): JSX.Element => (
  <>
    <HeaderComponent
      size={Sizes.SMALL}
      description={personalData.description}
    />
    <SectionBlock title="Hobbies">
      <HobbiesBlock content={personalData.hobbies} />
    </SectionBlock>
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
  </>
)

// export async function getStaticProps(): Promise<{ props: ResumePageProps }> {
//   return {
//     props: {
//       personalData,
//       experienceData,
//       projectsData
//     }
//   }
// }

export default ResumePage
