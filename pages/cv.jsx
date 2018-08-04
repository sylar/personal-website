import React from 'react'
import {graphql} from 'react-apollo'
import {Layout} from '../components'
import {cvQuery} from '../lib/gql'

const Homepage = ({data}) => {
  const {urlsBlock, logo, title, description} = data.resume
  return (
    <Layout>
    </Layout>
  )
}

export default graphql(homepageQuery)(Homepage)

Homepage.displayName = 'Homepage'
