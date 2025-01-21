import styled, { css } from 'styled-components'
import { Image, Sizes } from '../../styles/global'
import { LogoProps } from './types'

export const LogoContainer = styled.div<LogoProps>`
  ${(props) => {
    switch (props.size) {
      case Sizes.SMALL:
        return css`
          height: ${(props) => props.theme.typography.lineHeightSpacing(5)};
          svg {
            width: ${(props) => props.theme.typography.lineHeightSpacing(5)};
            height: ${(props) => props.theme.typography.lineHeightSpacing(5)};
          }
        `
      case Sizes.MEDIUM:
        return css`
          height: ${(props) => props.theme.typography.lineHeightSpacing(6)};
          text-align: center;
          svg {
            width: ${(props) => props.theme.typography.lineHeightSpacing(6)};
            height: ${(props) => props.theme.typography.lineHeightSpacing(6)};
          }
        `
      default:
        return css`
          width: 100%;
          height: 130px;
        `
    }
  }}

  @media print {
    svg {
      width: 7.2rem;
      height: 7.2rem;
    }
  }
`

export const Logo = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`
