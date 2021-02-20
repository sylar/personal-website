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
    actions: { SET_MODE },
    state
  } = useResumeCxt()
  const [isLite, setIsLite] = React.useState(true)

  const localRouter = useRouter()

  React.useEffect(() => {
    if (SET_MODE) {
      SET_MODE(localRouter.query.mode as ResumeViewModes)
    }
  }, [localRouter.query.mode])

  console.log('modeeeee', state.mode, props, { isLite })

  const workplaces = isLite
    ? state.workplaces.slice(0, state.liteMaxItems)
    : state.workplaces

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
          setIsLite(nextState.toUpperCase() === ResumeViewModes.LITE)
        }}
      />

      <SectionBlock title="Experience">
        {workplaces.map((xp, key) => (
          <ExperienceBlock
            key={`xp_block_${key}`}
            company={{
              description: xp.description,
              name: xp.company
            }}
            job={{ ...xp, duties: xp.tasks, title: xp.jobTitle }}
          />
        ))}
        {isLite && (
          <SectionBlock title="Previous">
            <PreviousWorplaces workplaces={state.liteWorkplaces} />
          </SectionBlock>
        )}
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
}

export default ResumePage
