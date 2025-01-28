'use client'

import { SectionBlock, SectionBlockTitle } from './styled'
import { SectionBlockProps } from './types'

const SectionBlockComponent = ({ title, children }: SectionBlockProps) => {
  return (
    <SectionBlock>
      <SectionBlockTitle>{title}</SectionBlockTitle>
      {children}
    </SectionBlock>
  )
}

export default SectionBlockComponent
