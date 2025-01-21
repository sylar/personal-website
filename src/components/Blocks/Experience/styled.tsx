import styled, { css } from 'styled-components'
import { Div, Article, LI, H6, H5, Paragraph } from '../../../styles/global'
import { BlockHeading, BlockList } from '../styled'

export const JobName = styled(H5)<{ $isClient: boolean }>`
  text-transform: capitalize;
  ${({ $isClient, theme }) =>
    $isClient &&
    `@media screen {
      margin-top: 0;
      margin-bottom: 0;
      font-size: ${theme.typography.h6.fontSize};
      line-height: ${theme.typography.h6.lineHeight};
      }
  `}
`

export const JobDuration = styled(H6)`
  font-weight: normal;
  justify-self: flex-end;
`

export const TasksList = styled(Div)`
  line-height: 1.5;
  ul,
  li {
    line-height: 1.25;
    margin: 2px 0;
  }
`

export const JobCompany = styled(Div)<{ $isClient: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  ${({ $isClient }) =>
    !$isClient &&
    css`
      margin-top: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
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
`
export const ExperienceBlock = styled(Article)<{ $isCondensed?: boolean }>`
  ${({ $isCondensed }) =>
    $isCondensed &&
    css`
      @media screen {
        margin-top: ${(props) =>
          props.theme.typography.lineHeightSpacing(0.75)};
      }
    `}
`

export const CondensedExperienceBlock = styled(Article)`
  @media screen {
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
  }
`

export const PreviousWorkplaceTimePeriod = styled(Div)`
  font-size: ${(props) => props.theme.typography.lineHeightSpacing(0.5)};
  line-height: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  align-self: flex-end;
  margin-left: ${(props) => props.theme.typography.lineHeightSpacing(0.25)};
`

export const PreviousWorkplacesLists = styled(Div)`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  /* justify-content: space-between; */
`

export const PreviousWorkplacesListItem = styled(LI)`
  display: flex;
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
