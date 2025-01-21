import HeaderComponent from '../components/Header'
import personalData from '../data/personal'
import projectsData from '../data/projects'
import SectionBlock from '../components/Blocks/Section'
import EducationBlock from '../components/Blocks/Education'
import ProjectsBlock from '../components/Blocks/Projects'
import React from 'react'
import PreviousWorplaces from '../components/Blocks/Experience/previous'
import SummarySection from '../components/Blocks/Summary'
import SkillsBox from '../components/Blocks/Skills'
import { getResumeCondensed } from '../context/resumeCondensed.context'
import ExperienceBlockComponent from '../components/Blocks/Experience'
import Head from 'next/head'

const ResumeContent = () => {
  const [{ displayedWorkplaces, previousWorkplaces }] = getResumeCondensed()
  console.log({ displayedWorkplaces, previousWorkplaces })
  return (
    <>
      <Head>
        <title>Resume</title>
        <link rel="stylesheet" href="https://basehold.it/24"></link>
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
      <SectionBlock title="Experience">
        {displayedWorkplaces.map((item, key) => (
          <ExperienceBlockComponent
            key={`xp_block_${key}`}
            experienceItem={item}
          />
        ))}
      </SectionBlock>

      <SectionBlock title="Previous">
        <PreviousWorplaces workplaces={previousWorkplaces} />
      </SectionBlock>
      <SectionBlock title="Education">
        <EducationBlock education={personalData.education} />
      </SectionBlock>
      <SectionBlock title="Side Projects">
        <ProjectsBlock projects={projectsData} />
      </SectionBlock>
    </>
  )
}

const ResumePage = (): JSX.Element => {
  return (
    <>
      <HeaderComponent email={personalData.email} onClick={() => {}} />
      <ResumeContent />
    </>
  )
}

export default ResumePage
