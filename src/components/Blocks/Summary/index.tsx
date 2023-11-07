import React from 'react'
import Md from '../../Md'
import { SummaryContent } from './styled'
import { SummaryProps } from './types'

const SummarySection = function (props: SummaryProps) {
  return <Md components={{ paragraph: SummaryContent }}>{props.content}</Md>
}

export default SummarySection
