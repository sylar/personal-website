import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { PageLayout } from '../styles/global'
import theme, { GlobalStyle } from '../styles/theme'
import Head from 'next/head'
import { ResumeCondensedProvider } from '../context/resumeCondensed.context'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta name="robots" content="noindex, nofollow" />
          <title>Andrei Constantinescu | Resume</title>
        </Head>
        <ThemeProvider theme={theme}>
          <ResumeCondensedProvider>
            <GlobalStyle />
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </ResumeCondensedProvider>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
