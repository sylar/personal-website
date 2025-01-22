import styled from 'styled-components'
import { Section, Subtitle } from '../../../styles/global'

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
export const SectionBlockTitle = styled(Subtitle)`
  @media print {
    font-size: 18px;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
`
