// @flow

import React from 'react'
import {graphql} from 'react-apollo'
import Header from '../components/header'
import Layout from '../components/layout'
import LinkList from '../components/linkList'
import {homepageQuery} from '../lib/gql'

const Homepage = ({data}) => {
  const {urlsBlock, logo, title, description} = data.homepage
  return (
    <Layout>
      <Header logo={logo} title={title} description={description} />
      <LinkList links={urlsBlock} />
    </Layout>
  )
}

export default graphql(homepageQuery)(Homepage)

Homepage.displayName = 'Homepage'
