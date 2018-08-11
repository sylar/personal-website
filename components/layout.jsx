import * as React from 'react'
import {Main, Article} from './styled'

const Layout = ({customCss, children}) => (
  <Main
    customCss={{
      ...customCss
    }}
  >
    <Article>{children}</Article>
  </Main>
)

Layout.displayName = 'Layout'

export default Layout
