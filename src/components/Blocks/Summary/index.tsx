import React from 'react'
import Md from '../../Md'
import { SummaryContent } from './styled'
import { SummaryProps } from './types'

const SummarySection = function (props: SummaryProps) {
  return <Md source={props.content} renderers={{ paragraph: SummaryContent }} />
}

export default SummarySection
