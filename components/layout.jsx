// @flow
import * as React from 'react'
import Header from './header'

type Props = {
  children?: React.Node
}

export default (props: Props) => (
  <React.Fragment>
    <main>
      <div>{props.children}</div>
    </main>
  </React.Fragment>
)
