import styled, { css } from 'styled-components'

import {
  Article,
  Div,
  H5,
  H6,
  LI,
  Paragraph,
  Span
} from '../../../styles/global'
import { Muted } from '../../Header/styled'
import { BlockHeading, BlockList } from '../styled'

export const JobName = styled(H5)<{ $isClient: boolean }>`
  text-transform: capitalize;
  font-weight: initial;
  display: flex;
  
  @media (max-width: 730px) {
    strong {
      flex-basis: 100%;
    } 
  }

  flex-wrap: wrap;
  gap: 0.25em;
  ${({ $isClient, theme }) =>
    $isClient &&
    `@media screen {
      margin-top: 0;
      margin-bottom: 0;
      font-size: ${theme.typography.lineHeightSpacing(0.75)};
      line-height: ${theme.typography.lineHeightSpacing(1)};
      }
      @media print {
        font-size: 13px;
        margin-top: 0.75rem;
      }
  `}
  span { 
    font-transform: capitalize;
  }
  @media print {
    ${({ $isClient }) =>
      !$isClient &&
      `
        font-size: 15px;`}
`

export const JobDuration = styled(H6)`
  font-weight: normal;
  justify-self: flex-end;
  @media print {
    font-size: 12px;
  }
`

export const TasksList = styled(Div)`
  line-height: 1.5;
  ul,
  li {
    line-height: 1.25;
    margin: 2px 0;
  }
}
`

export const JobCompany = styled(Div)<{ $isClient: boolean }>`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;
  ${({ $isClient }) =>
    !$isClient &&
    css`
     @media screen {@media screen {
      margin-top: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
}
    `}
`
export const ExperienceHeading = styled(BlockHeading)``
export const CompanyDescription = styled(Paragraph)`
  @media screen {
    margin-top: 0;
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.25)};
  }
`

export const MainExperienceBlock = styled(Article)`
  @media screen {
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  }
  @media print {
    margin-top: 1rem;
  }
`
export const ExperienceBlock = styled(Article)<{ $isCondensed?: boolean }>`
  page-break-inside: avoid;
  ${({ $isCondensed }) =>
    $isCondensed &&
    css`
      @media screen {
        margin-top: ${(props) =>
          props.theme.typography.lineHeightSpacing(1.25)};
      }
    `}
`

export const CondensedExperienceBlock = styled(Article)`
  @media screen {
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(1)};
  }
`

export const PreviousWorkplaceTimePeriod = styled(Muted)`
  font-weight: 300;
  color: initial;
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  @media print {
    display: block;
    color: initial;
  }
`

export const PreviousWorkplacesLists = styled(Div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
  width: 100%;
`

export const PreviousWorkplacesListItem = styled(LI)`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  text-transform: capitalize;
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
  padding: 0;
  flex: 1;

  @media (max-width: 730px) {
    flex-basis: 100%; /* Stack on smaller screens */
  }
`

export const JobRole = styled(Span)`
  text-transform: capitalize;
  @media (max-width: 730px) {
    strong {
      flex-basis: 100%;
    }
  }
`

export const PreviousWorkplaceName = styled(Span)`
  font-size: inherit;
  span {
    font-size: intial;
  }
`
export const PreviousWorkplaceJobTitle = styled(Span)`
  @media print {
    display: none;
  }
`
