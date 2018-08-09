import React from 'react'
import {graphql} from 'react-apollo'
import {Layout, LinkList, Logo, Paragraph, HR, Link} from '../components'
import {homepageQuery} from '../lib/gql'

const Homepage = ({data}) => {
  const {loading} = data

  if (loading) {
    return null
  }

  const {urlsBlock, logo, description} = data.homepage
  return (
    <Layout
      customCss={{
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0px 0px 2px 0px rgba(0,0,0,0.15)',
        padding: '3rem',
        paddingBottom: '1.5rem',
        borderRadius: '10px',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Logo src={logo} />
      <HR />
      <Paragraph
        md={description + description + description}
        customCss={{
          fontWeight: 300,
          letterSpacing: '1px',
          fontSize: '20px',
          lineHeight: '1.2em',
          margin: '2.4em 0'
        }}
      />
      <HR />
      <LinkList links={urlsBlock} />
    </Layout>
  )
}

Homepage.displayName = 'Homepage'

export default graphql(homepageQuery)(Homepage)
