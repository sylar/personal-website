import styled, { css } from 'styled-components'
import { Image, Section } from '../styled'
import { LogoContainerProps, LogoProps, LogoSizes } from './types'

export const LogoContainer = styled(Section)`
  width: 100%;

  ${(props: Partial<LogoContainerProps>) => {
    switch (props.size) {
      case LogoSizes.SMALL:
        return css`
          width: 15%;
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
  ${(props: LogoProps) =>
    props.round &&
    css`
      border-radius: 50%;
    `}
  }
`
