import { DefaultTheme } from 'styled-components'
import { Sizes } from '../../../styles/global'
import { LinkProps } from '../Link/types'

export type HeaderProps = {
  onClick?: (arg?: unknown) => void
  size?: Sizes
  email: Pick<LinkProps, 'label' | 'url'>
}

export type HeaderStyleProps = { theme: DefaultTheme } & HeaderProps
