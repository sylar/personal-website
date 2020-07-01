import {
  Heading,
  Title,
  Subtitle,
  Paragraph,
  Image,
  UL,
  LI
} from '../../lib/styles/global'
import ReactMarkdown from 'react-markdown'
import { MdProps } from './types'

const defaultRenderers = {
  paragraph: Paragraph,
  image: Image,
  h1: Heading,
  h3: Title,
  h4: Subtitle,
  ul: UL,
  li: LI
}

const Md = ({ renderers, source }: MdProps): JSX.Element => {
  return (
    <ReactMarkdown
      renderers={{ ...defaultRenderers, ...renderers }}
      source={source}
      escapeHtml={false}
    />
  )
}

export default Md
