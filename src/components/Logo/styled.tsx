import styled, { css } from 'styled-components'
import { Image, Sizes } from '../../lib/styles/global'
import { LogoProps } from './types'

export const LogoContainer = styled.div`
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
  @media print {
    svg {
      width: 6rem;
      height: 6rem;
    }
  }
`

export const Logo = styled(Image)`
  width: 100%;
`
