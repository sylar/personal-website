'use client'

import { ProjectsBlockProps } from './types'
import Md from '../../Md'
import { LI } from '../../../styles/global'
import { ProjectBlockList } from './styled'

const ProjectsBlock = (props: ProjectsBlockProps) => {
  return (
    <ProjectBlockList>
      {props.projects.map((project, key) => (
        <Md
          key={`projects_${key}`}
          components={{
            p: (props) => <LI {...props} />
          }}
          source={project.details}
        />
      ))}
    </ProjectBlockList>
  )
}

export default ProjectsBlock
