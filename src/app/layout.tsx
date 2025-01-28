import { Suspense } from 'react'

import StyledComponentsRegistry from '../lib/styled-components.registry'
import ClientThemeProvider from '../styles/ClientThemeProvider'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <Suspense>
            <ClientThemeProvider>{children}</ClientThemeProvider>
          </Suspense>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
