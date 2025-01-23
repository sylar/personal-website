'use client'

import { ThemeProvider } from 'styled-components'
import Theme, { GlobalStyle } from './theme'
import { ResumeCondensedProvider } from '../context/resumeCondensed.context'
import { PageLayout } from './global'

export default function ClientThemeProvider({children}) {
  return  <ThemeProvider theme={Theme}>
<GlobalStyle/>

<ResumeCondensedProvider>
      <PageLayout > {children}</PageLayout>
    </ResumeCondensedProvider>

</ThemeProvider>
  
}