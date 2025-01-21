import { SectionBlockProps } from './types'
import { SectionBlock } from './styled'
import { Subtitle } from '../../../styles/global'

const SectionBlockComponent = ({
  title,
  children
}: SectionBlockProps): JSX.Element => {
  return (
    <SectionBlock>
      <Subtitle>{title}</Subtitle>
      {children}
    </SectionBlock>
  )
}

export default SectionBlockComponent
