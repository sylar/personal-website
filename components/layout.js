// @flow
import React from 'react'
import Header from './header.js'

type props = {
  children?: React$Element<*>
}

export default ({ children }: props) =>
  <div>
    <Header />
    <main>
      {children}
    </main>
    <style jsx>{`
      div {
        max-width: 28rem;
        margin: 4rem auto;
      }

      main {
        margin: 3rem 0;
      }
    `}</style>
  </div>
