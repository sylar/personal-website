import styled, { css } from 'styled-components'
import { Image, Section, Sizes } from '../../lib/styles/global'
import { LogoProps } from './types'

export const LogoContainer = styled(Section)`
  ${(props: Partial<LogoProps>) => {
    switch (props.size) {
      case Sizes.SMALL:
        return css`
          svg {
            width: ${(props) => props.theme.typography.lineHeightSpacing(4.5)};
            height: ${(props) => props.theme.typography.lineHeightSpacing(4.5)};
          }
        `
      case Sizes.MEDIUM:
        return css`
          text-align: center;
          svg {
            width: ${(props) => props.theme.typography.lineHeightSpacing(6)};
            height: ${(props) => props.theme.typography.lineHeightSpacing(6)};
          }
        `
      default:
        return css`
          width: 100%;
        `
    }
  }}
`

export const Logo = styled(Image)`
  width: 100%;
`
