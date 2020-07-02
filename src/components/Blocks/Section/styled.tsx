import styled from 'styled-components'
import { Section } from '../../../lib/styles/global'

export const SectionBlock = styled(Section)`
  h6 {
    margin-top: ${(props) => props.theme.typography.lineHeightSpacing(2.5)};
  }
`
