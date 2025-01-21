import styled from 'styled-components'
import { Paragraph } from '../../../styles/global'

export const SummaryContent = styled(Paragraph)`
  font-style: initial;
  @media print {
    line-height: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  }
`
