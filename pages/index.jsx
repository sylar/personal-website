import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import { homepageQuery } from '../lib/gql-queries'
import {
  Header,
  Layout,
  LinkList,
  Logo,
  Paragraph,
  HR,
  Heading
} from '../components'

const HomePage = () => (
  <Query query={homepageQuery}>
    {({ data, loading, error }) => {
      if (loading) {
        return null
      }
      const { homepage } = data.prismic
      const { urlsBlock, logo, description, title } = homepage
      const urls = urlsBlock.concat({
        name: 'Resume',
        url: '/cv'
      })

      return (
        <Fragment>
          <Header
            customCss={{
              textAlign: 'center',
              '@media (max-width: 480px)': {
                marginTop: '4.5rem'
              }
            }}
          >
            <Logo
              src={logo}
              customCss={{
                width: '6rem',
                margin: '1.5rem auto',
                marginTop: 0,
                height: '6rem'
              }}
            />
            <Heading
              md={title}
              customCss={{
                fontWeight: 300,
                margin: 0
              }}
            />
          </Header>
          <Layout
            customCss={{
              maxWidth: '25rem',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              padding: '1.5rem',
              borderRadius: '10px',
              '@media (max-width: 480px)': {
                boxShadow: 'none',
                borderRadius: 0,
                margin: '1.5rem',
                padding: 0
              }
            }}
          >
            <Paragraph
              md={description}
              customCss={{
                fontWeight: 300,
                letterSpacing: '1px',
                fontSize: '20px',
                margin: '1.5rem 0'
              }}
            />
            <HR customCss={{ borderColor: 'rgba(0,0,0,0.15)' }} />
            <LinkList links={urls} />
          </Layout>
        </Fragment>
      )
    }}
  </Query>
)

HomePage.displayName = 'HomePage'

export default HomePage
