import styled from 'styled-components'
import { CompanyDescription } from '../Experience/styled'

export const SummaryContent = styled(CompanyDescription)`
  font-style: initial;
  @media print {
    line-height: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  }
`
