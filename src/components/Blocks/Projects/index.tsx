import { ProjectsBlockProps } from './types'
import Md from '../../Md'
import { LI } from '../../../styles/global'
import { ProjectBlockList } from './styled'

const ProjectsBlock = (props: ProjectsBlockProps): JSX.Element => {
  return (
    <ProjectBlockList>
      {props.projects.map((project, key) => (
        <Md
          key={`projects_${key}`}
          components={{
            paragraph: LI
          }}
        >
          {project.details}
        </Md>
      ))}
    </ProjectBlockList>
  )
}

export default ProjectsBlock
