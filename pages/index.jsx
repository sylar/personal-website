import React from 'react'
import {graphql} from 'react-apollo'
import {Layout, LinkList, Logo, Paragraph, HR} from '../components'
import {homepageQuery} from '../lib/gql'

const Homepage = ({data}) => {
  const {loading} = data

  if (loading) {
    return null
  }

  const {urlsBlock, logo, description} = data.homepage

  const urls = urlsBlock.concat({
    name: 'Resume',
    url: '/cv'
  })

  return (
    <Layout
      customCss={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 0px 1px 0px rgba(0,0,0,0.15)',
        padding: '3rem',
        borderRadius: '10px',
        '@media (max-width: 480px)': {
          boxShadow: 'none',
          borderRadius: 0,
          margin: '1.5rem',
          padding: 0
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
      <Paragraph
        md={description}
        customCss={{
          fontWeight: 300,
          letterSpacing: '1px',
          fontSize: '20px',
          lineHeight: '1.2em',
          margin: '2.4em 0'
        }}
      />
      <HR customCss={{borderColor: 'rgba(0,0,0,0.15)'}} />
      <LinkList links={urls} />
    </Layout>
  )
}

Homepage.displayName = 'Homepage'

export default graphql(homepageQuery)(Homepage)
