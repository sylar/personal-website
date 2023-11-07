import {
  Heading,
  Title,
  Subtitle,
  Paragraph,
  Image,
  UL,
  LI
} from '../../styles/global'
import ReactMarkdown from 'react-markdown'
import { MdProps } from './types'

const defaultcomponents = {
  paragraph: Paragraph,
  image: Image,
  h1: Heading,
  h3: Title,
  h4: Subtitle,
  ul: UL,
  li: LI
}

const Md = ({ components, children }: MdProps): JSX.Element => {
  return (
    <ReactMarkdown components={{ ...defaultcomponents, ...components }}>
      {children}
    </ReactMarkdown>
  )
}

export default Md
