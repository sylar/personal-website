import { Section, Title, Sizes } from '../../lib/styles/global'
import styled, { css } from 'styled-components'
import { HeaderProps } from './types'

export const Header = styled(Section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props: Partial<HeaderProps>) => {
    switch (props.size) {
      case Sizes.MEDIUM:
        return css`
          margin-bottom: ${(props) =>
            props.theme.typography.lineHeightSpacing(3)};
          padding-top: ${(props) =>
            props.theme.typography.lineHeightSpacing(4)};
        `
      case Sizes.SMALL:
        return css`
          margin: ${(props) => props.theme.typography.lineHeightSpacing(0.5)} 0;
          padding-top: 0;
        `
      default:
        break
    }
  }}
`
export const HeaderTitle = styled(Title)`
  font-weight: 400;
  ${(props: Partial<HeaderProps>) => {
    switch (props.size) {
      case Sizes.SMALL:
        return css`
          margin: 0;
          padding-top: 0;
          font-size: ${(props) => props.theme.typography.h5.fontSize};
        `
      default:
        break
    }
  }}
`
