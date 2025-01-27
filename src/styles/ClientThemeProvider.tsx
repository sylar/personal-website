'use client'

import { ThemeProvider } from 'styled-components'
import Theme, { GlobalStyle } from './theme'
import { ResumeCondensedProvider } from '../context/resumeCondensed.context'
import { PageLayout } from './global'
import { useSearchParams } from 'next/navigation'

export default function ClientThemeProvider({ children }) {
  const searchParams = useSearchParams()
  const isDetailedView = searchParams.get('view') === 'full'

  return <ThemeProvider theme={Theme}>
  <GlobalStyle />
  <ResumeCondensedProvider isDetailedView={isDetailedView}>
    <PageLayout>{children}</PageLayout>
  </ResumeCondensedProvider>
</ThemeProvider>
}