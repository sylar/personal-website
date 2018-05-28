// @flow
import * as React from 'react'
import Header from './header.js'

type Props = {
  children?: React.Node
}

export default (props: Props) =>
  <React.Fragment>
    <Header />
    <main>
      {props.children}
    </main>
    <style jsx>{`
      div {
        max-width: 30rem;
        margin: 4rem auto;
      }

      main {
        margin: 3rem 0;
        padding: 0 0.5rem;
      }
    `}</style>
  </React.Fragment>
