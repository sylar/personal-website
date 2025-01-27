import { DefaultTheme } from 'styled-components'
import { Sizes } from '../../styles/global'

export type LinkProps = {
  url: string
  label: string
}

export type HeaderProps = {
  onClick?: (arg?: unknown) => void
  size?: Sizes
  email: LinkProps
}

export type HeaderStyleProps = { theme: DefaultTheme } & HeaderProps
