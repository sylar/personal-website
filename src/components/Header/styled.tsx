import { Section, Title, Sizes } from '../../lib/styles/global'
import styled, { css } from 'styled-components'
import { HeaderProps } from './types'

export const Header = styled(Section)`
  display: flex;
  ${(props: Partial<HeaderProps>) => {
    switch (props.size) {
      case Sizes.MEDIUM:
        return css`
          justify-items: center;
          align-items: center;
          flex-direction: column;
          margin-bottom: ${(props) =>
            props.theme.typography.lineHeightSpacing(3)};
          padding-top: ${(props) =>
            props.theme.typography.lineHeightSpacing(4)};
        `
      case Sizes.SMALL:
        return css`
          align-items: center;
          flex-direction: row-reverse;
          justify-content: space-between;
          padding: ${(props) => props.theme.typography.lineHeightSpacing(1)} 0;
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
          line-height: ${(props) => props.theme.typography.h5.lineHeight};
        `
      default:
        break
    }
  }}
`
