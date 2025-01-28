import styled from 'styled-components'

import { Paragraph } from '../../../styles/global'

export const HobbiesBlockContent = styled(Paragraph)`
  @media screen {
    font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
    line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  }
`
