import styled from 'styled-components'
import { Div, Article } from '../../../lib/styles/global'

export const JobName = styled(Div)`
  display: flex;
  flex: 5;
  text-transform: capitalize;
  strong {
    margin-right: 0.25rem;
  }
`

export const JobDuration = styled(Div)`
  display: flex;
  flex: 3;
  justify-content: flex-end;
`

export const JobCompany = styled(Div)`
  display: flex;
  flex: 3;
  justify-content: center;
`

export const ExperienceBlock = styled(Article)`
  @media screen {
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(1.75)};
  }
`
