import HeaderComponent from '../components/Header'
import { ResumeSwitcher, Span } from '../styles/global'
import personalData from '../data/personal'
import projectsData from '../data/projects'
import SectionBlock from '../components/Blocks/Section'
import EducationBlock from '../components/Blocks/Education'
import ProjectsBlock from '../components/Blocks/Projects'
import HobbiesBlock from '../components/Blocks/Hobbies'
import { useResumeCxt } from '../context/resume.context'
import { ResumeViewModes } from '../context/types'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import PreviousWorplaces from '../components/Blocks/Experience/previous'
import SummarySection from '../components/Blocks/Summary'
import SkillsBox from '../components/Blocks/Skills'
import ExperienceCondensedBlockComponent from '../components/Blocks/ExperienceCondensed'
import { getResumeCondensed } from '../context/resumeCondensed.context'

type ResumeContentProps = {
  displayedWorkplaces: any[]
  liteModeOn: boolean
  liteWorkplaces: any[]
}

const ResumeContent = ({
  displayedWorkplaces,
  liteModeOn,
  liteWorkplaces
}: ResumeContentProps) => {
  const a = [displayedWorkplaces[0]]
  return (
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
          {a.map((xp, key) => (
            <ExperienceCondensedBlockComponent
              key={`xp_block_${key}`}
              job={xp}
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
}

const ResumePage = (): JSX.Element => {
  const {
    actions: { SWITCH_MODE },
    state: { liteModeOn }
  } = useResumeCxt()

  const [resumeData] = getResumeCondensed()

  const localRouter = useRouter()

  const lite = resumeData.reduce((acc, v) => {
    if (v.clientsByTiers) {
      return acc.concat(v.clientsByTiers.tierB)
    }
    return acc.concat(v)
  }, [])

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
        displayedWorkplaces={resumeData}
        liteWorkplaces={lite}
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
