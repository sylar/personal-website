/// <reference types="next" />
/// <reference types="next/types/global" />

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      light: string
      dark: string
    }
    fontFamily: string

    colors: {
      primary: string
      secondary: string
    }
  }
}
