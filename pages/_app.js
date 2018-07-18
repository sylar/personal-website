import App, {Container} from 'next/app'
import React from 'react'
import {withApollo} from '../lib/apollo'
import {ApolloProvider} from 'react-apollo'
import {injectGlobal, hydrate} from 'react-emotion'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    background: whitesmoke;
    font-family: --apple-system, BlinkMacSystemFont, helvetica, sans-serif;
    font-size: 24px;
  }
`

class MyApp extends App {
  render () {
    const {Component, pageProps, apolloClient} = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApollo(MyApp)
