import { Sizes } from '../../styles/global'
import { DefaultTheme } from 'styled-components'

export type HeaderProps = {
  size?: Sizes
  description: string
}

export type HeaderStyleProps = { theme: DefaultTheme } & HeaderProps
