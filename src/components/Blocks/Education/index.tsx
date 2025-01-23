'use client'

import { EducationBlockProps } from './types'
import { Span } from '../../../styles/global'
import { EducationEntry } from './styled'

const EducationBlockComponent = ({ education }: EducationBlockProps) => {
  return (
    <EducationEntry>
      <Span>
        {education.degree} from {education.institution}
      </Span>
      <Span />
    </EducationEntry>
  )
}

export default EducationBlockComponent
