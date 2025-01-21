import styled from 'styled-components'
import { Section } from '../../../styles/global'

export const SectionBlock = styled(Section)`
  @media screen {
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(2.3)};
  }
  @media print {
    h6 {
      margin-top: 0.25rem;
      margin-bottom: 0;
    }
  }
`
