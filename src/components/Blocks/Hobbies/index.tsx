'use client'

import Md from '../../Md'
import { HobbiesBlockProps } from './types'
import { HobbiesBlockContent } from './styled'

const HobbiesBlock = ({ content }: HobbiesBlockProps) => {
  return (
    <Md
      components={{ p: (props) => <HobbiesBlockContent {...props} /> }}
      source={content}
    />
  )
}

export default HobbiesBlock
