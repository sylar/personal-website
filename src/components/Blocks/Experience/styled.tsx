import styled from 'styled-components'
import { Div, Article, LI, H6, H5 } from '../../../styles/global'
import { BlockList } from '../styled'

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

export const JobCompany = styled(Div)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const ExperienceBlock = styled(Article)`
  @media screen {
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
  }
`

export const CondensedExperienceBlock = styled(Article)`
  @media screen {
    margin-left: ${(props) => props.theme.typography.lineHeightSpacing(1.25)};
    margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(0.75)};
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
