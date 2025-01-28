import { Metadata } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import EducationBlock from '../../components/Blocks/Education'
import ExperienceSection from '../../components/Blocks/Experience'
import PreviousWorplacesSection from '../../components/Blocks/Experience/previous'
import ProjectsBlock from '../../components/Blocks/Projects'
import SectionBlock from '../../components/Blocks/Section'
import SkillsBox from '../../components/Blocks/Skills'
import SummarySection from '../../components/Blocks/Summary'
import HeaderComponent from '../../components/Header'
import { Muted } from '../../components/Header/styled'
import { personalData } from '../../data/personal'
import { projectsData } from '../../data/projects'
import { ResumeMutedContainer } from '../../styles/global'

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

      <ResumeMutedContainer>
        <Muted>
          <Link prefetch href={isDetailedView ? '/' : '/resume?view=full'}>
            View {isDetailedView ? 'short' : 'detailed'} resume
          </Link>
        </Muted>

        <Muted>
          <Link
            download
            href={
              isDetailedView
                ? 'https://sylar-personal-website.s3.eu-west-2.amazonaws.com/resume/Andrei Constantinescu Detailed Resume.pdf'
                : 'https://sylar-personal-website.s3.eu-west-2.amazonaws.com/resume/Andrei Constantinescu Resume.pdf'
            }
          >
            Download resume
          </Link>
        </Muted>
      </ResumeMutedContainer>
    </>
  )
}

export default ResumePage
