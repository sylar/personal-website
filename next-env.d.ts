/// <reference types="next" />
/// <reference types="next/types/global" />

import Shevy from 'shevyjs'
import { RhythmProperties } from 'shevyjs/types'
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
    typography: {
      body: Pick<
        RhythmProperties,
        Exclude<keyof RhythmProperties, 'marginBottom'>
      >
      h2: RhythmProperties
      h3: RhythmProperties
      h4: RhythmProperties
      h5: RhythmProperties
      content: RhythmProperties
    } & Pick<Shevy, 'lineHeightSpacing' | 'baseSpacing'>
  }
}
