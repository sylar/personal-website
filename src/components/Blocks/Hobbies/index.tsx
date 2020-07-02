import Md from '../../Md'
import { HobbiesBlockProps } from './types'
import { HobbiesBlockContent } from './styled'

const HobbiesBlock = ({ content }: HobbiesBlockProps): JSX.Element => {
  return <Md source={content} renderers={{ paragraph: HobbiesBlockContent }} />
}

export default HobbiesBlock
