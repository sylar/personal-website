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
import React from 'react'
import { useRouter } from 'next/router'
import PreviousWorplaces from '../components/Blocks/Experience/previous'
import SummarySection from '../components/Blocks/Summary'
import SkillsBox from '../components/Blocks/Skills'

const ResumePage = (): JSX.Element => {
  const {
    actions: { SWITCH_MODE },
    state: { liteModeOn, liteMaxItems, liteWorkplaces, workplaces }
  } = useResumeCxt()

  const localRouter = useRouter()

  React.useEffect(() => {
    const isCorrectMode = Object.keys(ResumeViewModes).includes(
      ((localRouter.query?.mode as string) || '').toUpperCase()
    )
    if (isCorrectMode && SWITCH_MODE) {
      SWITCH_MODE(
        (localRouter.query.mode as string).toUpperCase() as ResumeViewModes
      )
    }

    if (!isCorrectMode) {
      localRouter.push({
        query: {
          mode: ResumeViewModes.LITE.toLowerCase()
        }
      })
    }
  }, [localRouter.query.mode])

  const displayedWorkplaces = liteModeOn
    ? workplaces.slice(0, liteMaxItems)
    : workplaces

  const SwitchModeAndUpdateUrl = (mode: ResumeViewModes) => {
    localRouter.push({
      query: {
        mode: mode.toLowerCase()
      }
    })
    SWITCH_MODE(mode)
  }

  return (
    <>
      <HeaderComponent
        email={personalData.email}
        onClick={SwitchModeAndUpdateUrl}
      />

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
      {liteModeOn ? (
        <ResumeSwitcher
          onClick={() => SwitchModeAndUpdateUrl(ResumeViewModes.FULL)}
        >
          <Span>View the more detailed cv</Span>
        </ResumeSwitcher>
      ) : (
        <ResumeSwitcher
          onClick={() => SwitchModeAndUpdateUrl(ResumeViewModes.LITE)}
        >
          <Span>Switch to resume</Span>
        </ResumeSwitcher>
      )}
    </>
  )
}

export default ResumePage
