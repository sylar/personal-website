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
  p(props) {
    return <Paragraph {...props} />
  },
  img: (props) => <Image {...props} />,
  h1: (props) => <Heading {...props} />,
  h3: (props) => <Title {...props} />,
  h4: (props) => <Subtitle {...props} />,
  ul: (props) => <UL {...props} />,
  li: (props) => <LI {...props} />
}

const Md = ({ components, source }: MdProps) => {
  return (
    <ReactMarkdown
      components={{ ...defaultcomponents, ...components }}
      // eslint-disable-next-line react/no-children-prop
      children={source}
    />
  )
}

export default Md
