import HeaderComponent from '../components/Header'
import { ResumeSwitcher, Span } from '../styles/global'
import ExperienceBlock from '../components/Blocks/Experience'
import personalData from '../data/personal'
import projectsData from '../data/projects'
import SectionBlock from '../components/Blocks/Section'
import EducationBlock from '../components/Blocks/Education'
import ProjectsBlock from '../components/Blocks/Projects'
import HobbiesBlock from '../components/Blocks/Hobbies'
import { useResumeCxt } from '../context/resume.context'
import { ResumeViewModes } from '../context/types'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import PreviousWorplaces from '../components/Blocks/Experience/previous'
import SummarySection from '../components/Blocks/Summary'
import SkillsBox from '../components/Blocks/Skills'

type ResumeContentProps = {
  displayedWorkplaces: any[]
  liteModeOn: boolean
  liteWorkplaces: any[]
}

const ResumeContent = ({
  displayedWorkplaces,
  liteModeOn,
  liteWorkplaces
}: ResumeContentProps) => (
  <>
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
      <>
        {displayedWorkplaces.map((xp, key) => (
          <ExperienceBlock
            key={`xp_block_${key}`}
            company={{
              description: xp.description,
              name: xp.company
            }}
            job={{ ...xp, duties: xp.tasks, title: xp.jobTitle }}
          />
        ))}
      </>
      {liteModeOn && (
        <SectionBlock title="Previous">
          <PreviousWorplaces workplaces={liteWorkplaces} />
        </SectionBlock>
      )}
    </SectionBlock>
    <SectionBlock title="Education">
      <EducationBlock education={personalData.education} />
    </SectionBlock>
    <SectionBlock title="Side Projects">
      <ProjectsBlock projects={projectsData} />
    </SectionBlock>

    {!liteModeOn && (
      <SectionBlock title="Hobbies">
        <HobbiesBlock content={personalData.hobbies} />
      </SectionBlock>
    )}
  </>
)

const ResumePage = (): JSX.Element => {
  const {
    actions: { SWITCH_MODE },
    state: { liteModeOn, liteMaxItems, liteWorkplaces, workplaces }
  } = useResumeCxt()

  const localRouter = useRouter()

  useEffect(() => {
    const { query } = localRouter
    const hasMode = query.mode !== undefined
    const isFullMode =
      hasMode &&
      (query.mode as string).toLowerCase() ===
        ResumeViewModes.FULL.toLowerCase()

    if (isFullMode) {
      SWITCH_MODE(ResumeViewModes.FULL)
    }
  }, [localRouter.query.mode])

  const displayedWorkplaces = liteModeOn
    ? workplaces.slice(0, liteMaxItems)
    : workplaces

  const SwitchModeAndUpdateUrl = (mode: ResumeViewModes) => {
    if (mode === ResumeViewModes.FULL) {
      localRouter.push({
        query: {
          mode: mode === ResumeViewModes.FULL ? mode.toLowerCase() : undefined
        }
      })
    } else {
      localRouter.push({})
    }
    SWITCH_MODE(mode)
  }

  return (
    <>
      <HeaderComponent
        email={personalData.email}
        onClick={SwitchModeAndUpdateUrl}
      />
      <ResumeContent
        liteModeOn={liteModeOn}
        displayedWorkplaces={displayedWorkplaces}
        liteWorkplaces={liteWorkplaces}
      />
      {liteModeOn ? (
        <ResumeSwitcher>
          <Span onClick={() => SwitchModeAndUpdateUrl(ResumeViewModes.FULL)}>
            View the more detailed cv
          </Span>
          {/* <Span onClick={() => localRouter.push('/api/pdf')}>Download</Span> */}
        </ResumeSwitcher>
      ) : (
        <ResumeSwitcher>
          <Span onClick={() => SwitchModeAndUpdateUrl(ResumeViewModes.LITE)}>
            Switch to resume
          </Span>
          {/* <Span onClick={() => localRouter.push('/api/pdf?mode=full')}>
            Download
          </Span> */}
        </ResumeSwitcher>
      )}
    </>
  )
}

export default ResumePage
