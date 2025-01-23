'use client'

import { SectionBlockProps } from './types'
import { SectionBlock, SectionBlockTitle } from './styled'

const SectionBlockComponent = ({ title, children }: SectionBlockProps) => {
  return (
    <SectionBlock>
      <SectionBlockTitle>{title}</SectionBlockTitle>
      {children}
    </SectionBlock>
  )
}

export default SectionBlockComponent
