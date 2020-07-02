import { ExperienceBlockContentProps } from './types'
import Md from '../../Md'
import { ExperienceContentList } from './styled'
const ExperienceBlockContent = (
  props: ExperienceBlockContentProps
): JSX.Element => {
  return (
    <Md source={props.duties} renderers={{ list: ExperienceContentList }} />
  )
}

export default ExperienceBlockContent
