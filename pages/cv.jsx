import React from 'react'
import {graphql} from 'react-apollo'
import {Layout, Logo, SliceHeader} from '../components'
import {cvQuery} from '../lib/gql'
import {map} from 'lodash'

const CvPage = ({data}) => {
  const {lastUpdate, title, email, slices, logo} = data.resume

  console.log(slices)
  return (
    <Layout
      customCss={{
        maxWidth: '50rem',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem'
      }}
    >
      <Logo src={logo} />
      <SliceHeader md={slices.experience.title} />
    </Layout>
  )
}

CvPage.displayName = 'CvPage'

export default graphql(cvQuery)(CvPage)
