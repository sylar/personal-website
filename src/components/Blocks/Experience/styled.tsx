import styled from 'styled-components'
import { Div, Article, Paragraph, LI, UL } from '../../../styles/global'
import { BlockList } from '../styled'

export const JobName = styled(Div)`
  display: flex;
  text-transform: capitalize;
  strong {
    margin-right: 0.25rem;
  }
`

export const JobDuration = styled(Div)`
  display: flex;
  justify-content: flex-end;
`

export const JobCompany = styled(Div)`
  display: flex;
  flex-wrap: wrap;

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
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.25)};
    font-size: inherit;
  }
`

export const PreviousWokplacesLists = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  /* justify-content: space-between; */
`

export const PreviousWorkplacesListItem = styled(LI)`
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
export const PreviousWorkplaceList = styled(BlockList)`
  flex: 1;
  li {
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.25)};
  }
`
