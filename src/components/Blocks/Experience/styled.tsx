import styled from 'styled-components'
import { Div, Article, Paragraph, LI } from '../../../styles/global'

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

export const CompanyDescription = styled(Paragraph)`
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  margin: 0;
  margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
  font-style: italic;
  @media print {
    font-size: inherit;
  }
`

export const PreviousWokplacesLists = styled(Div)`
  display: flex;
  justify-content: space-between;
`

export const PreviousWorkplacesListItem = styled(LI)`
  list-style-type: none;
`
