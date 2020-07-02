import styled from 'styled-components'
import { Div, UL } from '../../lib/styles/global'

export const BlockHeading = styled(Div)`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  padding: ${(props) => props.theme.typography.lineHeightSpacing(0.5)} 0;
`

export const BlockList = styled(UL)`
  padding: 0;
  margin: 0;
  margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};

  p {
    margin: 0;
  }

  li {
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
  }
`
