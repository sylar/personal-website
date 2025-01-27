/* eslint-disable @typescript-eslint/no-unused-vars */

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

const defaultcomponents = {
  p: ({ node: _node, ...props }) => <Paragraph {...props} />,
  img: ({ node, ...props }) => <Image alt="image" {...props} />,
  h1: ({ node, ...props }) => <Heading {...props} />,
  h3: ({ node, ...props }) => <Title {...props} />,
  h4: ({ node, ...props }) => <Subtitle {...props} />,
  ul: ({ node, ...props }) => <UL {...props} />,
  li: ({ node, ...props }) => <LI {...props} />
}

const Md = ({ components, source }) => {
  return (
    <ReactMarkdown
      components={{ ...components, ...defaultcomponents }}
      // eslint-disable-next-line react/no-children-prop
      children={source}
    />
  )
}

export default Md
