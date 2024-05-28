import { EducationBlockProps } from './types'
import { BlockHeading } from '../styled'
import { Span } from '../../../styles/global'

const EducationBlockComponent = ({
  education
}: EducationBlockProps): JSX.Element => {
  return (
    <BlockHeading>
      <Span>{education.degree}</Span>
      <Span>{education.institution}</Span>
      <Span />
    </BlockHeading>
  )
}

export default EducationBlockComponent
