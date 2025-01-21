import styled from 'styled-components'
import { Div, UL } from '../../styles/global'

export const BlockHeading = styled(Div)`
  padding: 0.25rem 0;
  display: flex;
  flex-direction: column;
  @media screen {
    font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
    line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};
    padding: ${(props) => props.theme.typography.lineHeightSpacing(0.25)} 0;
  }
`

export const BlockList = styled(UL)`
  padding: 0 1rem;
  margin: 0;
  margin-bottom: 1rem;
  @media screen {
    padding: 0;
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
    font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
    line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};

    p {
      margin: 0;
    }
  }
`
