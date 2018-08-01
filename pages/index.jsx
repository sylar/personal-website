// @flow

import React from 'react'
import {graphql} from 'react-apollo'
import {Layout, LinkList, Logo, Paragraph, HR} from '../components'
import {homepageQuery} from '../lib/gql'

const Homepage = ({data}) => {
  const {urlsBlock, logo, description} = data.homepage
  return (
    <Layout customCss={{display: 'flex', flexDirection: 'column'}}>
      <Logo src={logo} />
      <HR />
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
      <HR />
      <LinkList links={urlsBlock} />
    </Layout>
  )
}

export default graphql(homepageQuery)(Homepage)

Homepage.displayName = 'Homepage'
