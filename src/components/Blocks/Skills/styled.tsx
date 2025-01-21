import styled from 'styled-components'
import { LI } from '../../../styles/global'
import { BlockList } from '../styled'

export const SkillSetList = styled(BlockList)`
  display: flex;
  flex-direction: column;
  padding: 0;
`

export const SkillSetItem = styled(LI)`
  list-style-type: none;
  strong {
    text-transform: capitalize;
    margin-right: 0.2em;
  }
  div {
    text-transform: capitalize;
    font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
  }
`
