import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/apollo/with-apollo'
import { ApolloProvider } from 'react-apollo'
import { injectGlobal, hydrate } from 'emotion'
import globalStyle from '../lib/globalStyle'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`${globalStyle}`

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
