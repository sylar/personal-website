import { EducationBlockProps } from './types'
import { Span } from '../../../styles/global'
import { EducationEntry } from './styled'

const EducationBlockComponent = ({
  education
}: EducationBlockProps): JSX.Element => {
  return (
    <EducationEntry>
      <Span>{education.degree}</Span>
      <Span>{education.institution}</Span>
      <Span />
    </EducationEntry>
  )
}

export default EducationBlockComponent
