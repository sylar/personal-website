import styled from 'styled-components'
import { Div, UL } from '../../styles/global'

export const BlockHeading = styled(Div)`
  display: flex;
  flex-direction: column;
`

export const BlockList = styled(UL)`
  @media screen {
    padding-inline-start: ${(props) =>
      props.theme.typography.lineHeightSpacing(0.75)};
    p {
      margin: 0;
    }
  }
  @media print {
    padding-inline-start: 16px;
  }
`
