// @flow
import * as React from 'react'
import {Main} from './styled'

type Props = {
  children?: React.Node
}

const Layout = (props: Props) => <Main>{props.children}</Main>

Layout.displayName = 'Layout'

export default Layout
