import styled, { css } from 'styled-components'
import { Image, Section } from '../../lib/styles/global'
import { LogoProps, LogoSizes } from './types'

export const LogoContainer = styled(Section)`
  width: 100%;

  ${(props: Partial<LogoProps>) => {
    switch (props.size) {
      case LogoSizes.SMALL:
        return css`
          width: ${(props) => props.theme.typography.lineHeightSpacing(6)};
          height: ${(props) => props.theme.typography.lineHeightSpacing(6)};
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
