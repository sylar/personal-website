import App, {Container} from 'next/app'
import React from 'react'
import {withApollo} from '../lib/apollo'
import {ApolloProvider} from 'react-apollo'
import {injectGlobal, hydrate} from 'react-emotion'
import globalStyle from '../lib/globalStyle'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`${globalStyle}`

const PrintNotCopy = () =>
  document.addEventListener('copy', ev => {
    ev.clipboardData.setData(
      'text/plain',
      'To print, use the supplied print button please! Thanks :)'
    )
    ev.preventDefault()
  })

class MyApp extends App {
  componentDidMount () {
    PrintNotCopy()
  }

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
