import styled from 'styled-components'
import { Image } from '../../styles/global'
import { LogoProps } from './types'

export const LogoContainer = styled.div<LogoProps>`
  @media screen {
    height: ${(props) => props.theme.typography.lineHeightSpacing(6)};
    text-align: center;
    svg {
      width: ${(props) => props.theme.typography.lineHeightSpacing(6)};
      height: ${(props) => props.theme.typography.lineHeightSpacing(6)};
    }
  }

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
