import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { PageLayout } from '../components/styled'
import theme, { GlobalStyle } from '../theme'
import Head from 'next/head'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Andrei Constantinescu</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
