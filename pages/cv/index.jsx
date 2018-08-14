import React, {Fragment} from 'react'
import {graphql} from 'react-apollo'
import Head from 'next/head'
import {
  Layout,
  ExperienceSlice,
  SideProjectsSlice,
  HobbiesSlice
} from '../../components'
import {cvQuery} from '../../lib/gql'
import Header from './header'
import Content from './content'
import LastUpdate from './lastUpdate'

const CvPage = ({data}) => {
  const {loading} = data

  if (loading) {
    return null
  }

  const {
    lastUpdate,
    location,
    email,
    slices: {experience, sideProjects, hobbies},
    logo
  } = data.resume
  return (
    <Fragment>
      <Head>
        <title>Andrei Constantinescu | CV</title>
        <meta name="description" content="Andrei Constantinescu's CV." />
      </Head>
      <Header location={location} email={email} logo={logo} />
      <Layout
        customCss={{
          display: 'flex',
          flexDirection: 'column',
          margin: '0 auto',
          '@media (max-width: 480px)': {
            padding: 0
          }
        }}
      >
        <Content
          slices={[
            {
              Component: ExperienceSlice,
              data: {
                items: experience.content,
                headerText: experience.title
              }
            },
            {
              Component: SideProjectsSlice,
              data: {
                items: sideProjects.content,
                headerText: sideProjects.title
              }
            },
            {
              Component: HobbiesSlice,
              data: {
                description: hobbies.description,
                headerText: hobbies.title
              }
            }
          ]}
        />
        <LastUpdate timestamp={lastUpdate} />
      </Layout>
    </Fragment>
  )
}

CvPage.displayName = 'CvPage'

export default graphql(cvQuery)(CvPage)
