import styled from 'styled-components'
import { Div, UL, Article } from '../../../lib/styles/global'

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

export const ExperienceContentList = styled(UL)`
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

export const ExperienceBlock = styled(Article)`
  margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(1.75)};
`
