import { EducationBlockProps } from './types'
import { BlockHeading } from '../styled'
import { Span } from '../../../lib/styles/global'

const EducationBlockComponent = (props: EducationBlockProps): JSX.Element => {
  return (
    <BlockHeading>
      <Span>{props.degree}</Span>
      <Span>{props.institution}</Span>
      <Span>
        {props.startYear} - {props.endYear}
      </Span>
    </BlockHeading>
  )
}

export default EducationBlockComponent
