'use client'

import Md from '../../Md'
import { HobbiesBlockContent } from './styled'
import { HobbiesBlockProps } from './types'

const HobbiesBlock = ({ content }: HobbiesBlockProps) => {
  return (
    <Md
      components={{ p: (props) => <HobbiesBlockContent {...props} /> }}
      source={content}
    />
  )
}

export default HobbiesBlock
