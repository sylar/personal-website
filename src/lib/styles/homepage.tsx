import styled from 'styled-components'
import { Section, Title, PageLayout, Div } from './global'

export const Header = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.typography.lineHeightSpacing(3)};
  padding-top: ${(props) => props.theme.typography.lineHeightSpacing(4)};
`
export const HeaderTitle = styled(Title)`
  font-weight: 400;
`
export const HomeContent = styled(Section)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
export const HomeLayout = styled(PageLayout)`
  max-width: 600px;
  height: 100%;
`
export const HomeContactList = styled(Div)`
  margin-top: ${(props) => props.theme.typography.lineHeightSpacing(1)};
`
