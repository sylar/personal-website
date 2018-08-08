import * as React from 'react'
import {Main} from './styled'

const Layout = ({customCss, children}) => (
  <Main
    customCss={{
      ...customCss
    }}
  >
    {children}
  </Main>
)

Layout.displayName = 'Layout'

export default Layout
