import HeaderComponent from '../../components/Header'
import personalData from '../../data/personal'
import projectsData from '../../data/projects'
import SectionBlock from '../../components/Blocks/Section'
import EducationBlock from '../../components/Blocks/Education'
import ProjectsBlock from '../../components/Blocks/Projects'
import SummarySection from '../../components/Blocks/Summary'
import SkillsBox from '../../components/Blocks/Skills'

import Head from 'next/head'
import { Metadata } from 'next'
import ExperienceSection from '../../components/Blocks/Experience'
import PreviousWorplacesSection from '../../components/Blocks/Experience/previous'
import { Muted } from '../../components/Header/styled'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Andrei Constantinescu | Resume',
  description: 'Andrei Constantinescu | Resume'
}

const ResumePage = async ({ searchParams }) => {
  const params = await searchParams
  const isDetailedView = params.view === 'full'

  return (
    <>
      <HeaderComponent email={personalData.email} />
      <Head>
        <title>Resume</title>
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

      <ExperienceSection isDetailedView={isDetailedView} />

      {!isDetailedView && <PreviousWorplacesSection />}

      <SectionBlock title="Key Highlights">
        <EducationBlock education={personalData.education} />
        <ProjectsBlock projects={projectsData} />
      </SectionBlock>

      <Muted>
        <Link prefetch href={isDetailedView ? '/' : '/resume?view=full'}>
          View {isDetailedView ? 'short' : 'detailed'} resume
        </Link>
      </Muted>
    </>
  )
}

export default ResumePage
