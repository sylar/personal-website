import { SectionBlockProps } from './types'
import { SectionBlock } from './styled'
import { H6 } from '../../../lib/styles/global'

const SectionBlockComponent = ({
  title,
  children
}: SectionBlockProps): JSX.Element => {
  return (
    <SectionBlock>
      <H6>{title}</H6>
      {children}
    </SectionBlock>
  )
}

export default SectionBlockComponent
