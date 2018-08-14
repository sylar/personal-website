// @flow
import React, {Fragment} from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {extractCritical} from 'emotion-server'

class MyDocument extends Document {
  static getInitialProps ({renderPage}) {
    const page = renderPage()
    const styles = extractCritical(page.html)
    return {...page, ...styles}
  }

  constructor (props) {
    super(props)
    const {__NEXT_DATA__, ids} = props
    if (ids) {
      __NEXT_DATA__.ids = ids
    }
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <title>Andrei Constantinescu | Home</title>
          <meta name="viewport" content="width=device-width, minimum-scale=1" />
          <meta name="description" content="Andrei Constantinescu's website." />
          <style dangerouslySetInnerHTML={{__html: this.props.css}} />
          {/* <link rel="stylesheet" href="//basehold.it/24" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
