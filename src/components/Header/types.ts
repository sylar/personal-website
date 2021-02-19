import { Sizes } from '../../styles/global'
import { DefaultTheme } from 'styled-components'

export type HeaderProps = {
  size?: Sizes
  description?: string
  onClick?: (arg?: unknown) => void
}

export type HeaderStyleProps = { theme: DefaultTheme } & HeaderProps
