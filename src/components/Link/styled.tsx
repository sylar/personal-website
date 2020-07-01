import styled from 'styled-components'
import { LI, UL } from '../../lib/styles/global'

export const List = styled(UL)`
  padding: 0;
  display: flex;
`

export const ListElement = styled(LI)`
  display: block;
  margin: 0;
  margin-right: ${(props) => props.theme.typography.lineHeightSpacing(1)};
`
