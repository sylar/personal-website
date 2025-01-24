import HeaderComponent from '../../../components/Header'
import personalData from '../../../data/personal'
import projectsData from '../../../data/projects'
import SectionBlock from '../../../components/Blocks/Section'
import EducationBlock from '../../../components/Blocks/Education'
import ProjectsBlock from '../../../components/Blocks/Projects'
import SummarySection from '../../../components/Blocks/Summary'
import SkillsBox from '../../../components/Blocks/Skills'

import Head from 'next/head'
import { Metadata } from 'next'
import ExperienceSection from '../../../components/Blocks/Experience'
import PreviousWorplacesSection from '../../../components/Blocks/Experience/previous'
import { Paragraph } from '../../../styles/global'

export const metadata: Metadata = {
  title: 'Andrei Constantinescu | Resume',
  description: 'Andrei Constantinescu | Resume'
}
const ResumeContent = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        {/* <link rel="stylesheet" href="https://basehold.it/24"></link> */}
      </Head>
      <SectionBlock title="Summary">
        <SummarySection content={personalData.description} />
      </SectionBlock>
      <SectionBlock title="Skills">
        <SkillsBox
          languages={personalData.skills.languages}
          libraries={personalData.skills.libraries}
          technologies={personalData.skills.technologies}
        />
      </SectionBlock>
      <ExperienceSection />

      <PreviousWorplacesSection />
      <SectionBlock title="Key Highlights">
        <EducationBlock education={personalData.education} />
        <ProjectsBlock projects={projectsData} />
      </SectionBlock>
    </>
  )
}

const ResumePage = () => {
  return (
    <>
      <HeaderComponent email={personalData.email} />
      <ResumeContent />
    </>
  )
}

export default ResumePage
