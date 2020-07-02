import { ProjectsBlockProps } from './types'
import Md from '../../Md'
import { LI } from '../../../lib/styles/global'
import { ProjectBlockList } from './styled'

const ProjectsBlock = (props: ProjectsBlockProps): JSX.Element => {
  return (
    <ProjectBlockList>
      {props.projects.map((project, key) => (
        <LI key={`projects_${key}`}>
          <Md source={project.details} />
        </LI>
      ))}
    </ProjectBlockList>
  )
}

export default ProjectsBlock
