'use client'

import { Span } from '../../../styles/global'
import { EducationEntry } from './styled'
import { EducationBlockProps } from './types'

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
