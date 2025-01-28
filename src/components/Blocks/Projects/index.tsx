'use client'

import { LI } from '../../../styles/global'
import Md from '../../Md'
import { ProjectBlockList } from './styled'
import { ProjectsBlockProps } from './types'

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
