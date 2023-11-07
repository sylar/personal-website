import Md from '../../Md'
import { HobbiesBlockProps } from './types'
import { HobbiesBlockContent } from './styled'

const HobbiesBlock = ({ content }: HobbiesBlockProps): JSX.Element => {
  return <Md components={{ paragraph: HobbiesBlockContent }}>{content}</Md>
}

export default HobbiesBlock
