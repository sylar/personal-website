import styled from 'styled-components'
import { Div } from '../../lib/styles/global'

export const BlockHeading = styled(Div)`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  padding: ${(props) => props.theme.typography.lineHeightSpacing(0.5)} 0;
`
