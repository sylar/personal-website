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
    <style jsx>{`
      main {
        max-width: 30rem;
        margin: 4rem auto;
      }
      div {
        margin: 3rem 0;
        padding: 0 0.5rem;
      }
    `}</style>
  </React.Fragment>
)
