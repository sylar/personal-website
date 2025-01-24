import StyledComponentsRegistry from '../lib/styled-components.registry'
import ClientThemeProvider from '../styles/ClientThemeProvider'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <ClientThemeProvider>{children}</ClientThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
