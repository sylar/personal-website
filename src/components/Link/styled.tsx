import styled from 'styled-components'
import { LI, UL } from '../styled'

export const List = styled(UL)`
  padding: 0;
  display: flex;
`

export const ListElement = styled(LI)`
  display: block;
  margin: 0 ${(props) => props.theme.typography.lineHeightSpacing()};
`
