// @flow
import React, {Fragment} from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {extractCritical} from 'emotion-server'

type ctx = {
  renderPage: () => {
    head: Object,
    html: string,
    chunks: Object,
    errorHtml: string
  }
}
// {/* <style>{`
//   body {
//   font-family: --apple-system, BlinkMacSystemFont, helvetica, ubuntu, roboto, sans-serif;
//   margin: 10px;
// }
//
// @media (min-width: 30rem) {
// body {
// margin: 0;
// }
// }
// `}</style> */}
export default class MyDocument extends Document {
  static getInitialProps ({renderPage}: ctx) {
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
          <title>Andrei Constantinescu.</title>
          <meta name="viewport" content="width=device-width, minimum-scale=1" />
          <meta name="description" content="Andrei Constantinescu's website." />
          <link
            rel="stylesheet"
            href="https://unpkg.com/normalize.css@8.0.0/normalize.css"
          />
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
