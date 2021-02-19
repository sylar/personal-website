import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { PageLayout } from '../styles/global'
import theme, { GlobalStyle } from '../styles/theme'
import Head from 'next/head'
import ResumeProvider from '../context/resume.context'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Andrei Constantinescu</title>
        </Head>
        <ThemeProvider theme={theme}>
          <ResumeProvider>
            <GlobalStyle />
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          </ResumeProvider>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
