/// <reference types="next" />
/// <reference types="next/types/global" />

import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
        light: string,
        dark: string
    }
    fontFamily: string

    colors: {
        primary: string,
        secondary: string
    }
  }
}