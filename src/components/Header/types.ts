import { DefaultTheme } from 'styled-components'
import { Sizes } from '../../styles/global'

export type HeaderProps = {
  onClick?: (arg?: unknown) => void
  size?: Sizes
  email: { label: string; url: string }
}

export type HeaderStyleProps = { theme: DefaultTheme } & HeaderProps
