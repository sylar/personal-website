import styled from 'styled-components'
import { Section, PageLayout, Div } from './global'

export const HomeContent = styled(Section)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  vertical-align: baseline;
`
export const HomeLayout = styled(PageLayout)`
  max-width: 600px;
  height: 100%;
`
export const HomeContactList = styled(Div)`
  margin-top: ${(props) => props.theme.typography.lineHeightSpacing(1)};
`
