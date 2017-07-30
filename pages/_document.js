// @flow
import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import flush from 'styled-jsx/server'

type ctx = {
  renderPage: () => {
    head: Object,
    html: string,
    chunks: Object,
    errorHtml: string
  }
}

const TheHead = () =>
  <Head>
    <title>Andrei Constantinescu.</title>
    <meta name='viewport' content='width=device-width, minimum-scale=1' />
    <meta name='description' content="Andrei Constantinescu's website." />
  </Head>

export default class MyDocument extends Document {
  static getInitialProps ({renderPage}: ctx) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return {html, head, errorHtml, chunks, styles}
  }
  render () {
    return (
      <html lang='en'>
        <TheHead />
        <style jsx>{`
          body {
            font-family: --apple-system, BlinkMacSystemFont, helvetica, ubuntu, roboto, sans-serif;
            margin: 10px;
          }

          @media (min-width: 30rem) {
            body {
              margin: 0;
            }
          }
        `}</style>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
