import { ProjectsBlockProps } from './types'
import Md from '../../Md'
import { LI } from '../../../lib/styles/global'
import { ProjectBlockList } from './styled'

const ProjectsBlock = (props: ProjectsBlockProps): JSX.Element => {
  return (
    <ProjectBlockList>
      {props.projects.map((project, key) => (
        <Md
          key={`projects_${key}`}
          source={project.details}
          renderers={{
            paragraph: LI
          }}
        />
      ))}
    </ProjectBlockList>
  )
}

export default ProjectsBlock
