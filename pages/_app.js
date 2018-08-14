import App, {Container} from 'next/app'
import React from 'react'
import {withApollo} from '../lib/apollo'
import {ApolloProvider} from 'react-apollo'
import {injectGlobal, hydrate} from 'react-emotion'
import {print} from '../lib/style'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  ${print}
  html, body {
    background: white;
    font-family: --apple-system, BlinkMacSystemFont, helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
  }
  body {
    max-width: 45rem;
    margin: 4.5rem auto;
    @media (max-width: 480px) {
      margin: 1.5rem
    }
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
