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
        <ClientThemeProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ClientThemeProvider>
      </body>
    </html>
  )
}
