import HeaderComponent from '../components/Header'
import { Sizes } from '../styles/global'
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

const getNextViewState = (currentState: ResumeViewModes) => {
  const a =
    currentState?.toUpperCase() === ResumeViewModes.FULL
      ? ResumeViewModes.LITE.toLowerCase()
      : ResumeViewModes.FULL.toLowerCase()
  console.log({ a, currentState })

  return a
}

const ResumePage = (props): JSX.Element => {
  const {
    actions: { SWITCH_MODE },
    state: { liteModeOn, liteMaxItems, liteWorkplaces, workplaces }
  } = useResumeCxt()

  const localRouter = useRouter()

  React.useEffect(() => {
    if (
      (localRouter.query.mode as string)?.toUpperCase() ===
        ResumeViewModes.FULL &&
      liteModeOn
    ) {
      SWITCH_MODE()
    }
  }, [localRouter.query.mode])

  const displayedWorkplaces = liteModeOn
    ? workplaces.slice(0, liteMaxItems)
    : workplaces

  return (
    <>
      <HeaderComponent
        size={Sizes.SMALL}
        description={personalData.description}
        onClick={() => {
          const nextState = getNextViewState(
            localRouter.query.mode as ResumeViewModes
          )
          localRouter.push({
            query: {
              mode: nextState
            }
          })
          console.log({ nextState })
          SWITCH_MODE()
        }}
      />

      <SectionBlock title="Experience">
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

export default ResumePage
