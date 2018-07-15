// @flow

import React from 'react'
import {graphql} from 'react-apollo'
import Header from '../components/header'
import Layout from '../components/layout'
import LinkList from '../components/linkList'
import {homepageQuery} from '../lib/gql'

const Homepage = ({data}) => {
  console.log(data.loading, data.homepage)
  const {urlsBlock, logo, title, description} = data.homepage
  return (
    <Layout>
      <Header logo={logo} title={title} description={description} />
      <LinkList links={urlsBlock} />
      <style jsx>{`
      a {
        padding: 0.5rem 1rem;
        border: 1px solid #000;
        text-decoration: none;
        transition: background-color .15s ease-in-out;
        color: inherit;
        flex-basis: 2.5rem;
      }

      a:hover,
      a:focus {
        color: #fff;
        background-color: #000;
      }

      div {
        display: flex;
        flex-direction: column;
      }

      @media (min-width: 30rem) {

        div {
          text-align: center;
          flex-basis: 5rem;
          flex-direction: row;
          justify-content space-between;
        }
      }
    `}</style>
    </Layout>
  )
}

export default graphql(homepageQuery)(Homepage)

Homepage.displayName = 'Homepage'
