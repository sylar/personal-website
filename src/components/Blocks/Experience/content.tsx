import { ExperienceBlockContentProps } from './types'
import Md from '../../Md'
import { BlockList } from '../styled'
const ExperienceBlockContent = (
  props: ExperienceBlockContentProps
): JSX.Element => {
  return <Md source={props.duties} renderers={{ list: BlockList }} />
}

export default ExperienceBlockContent
