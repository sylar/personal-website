import React from 'react'
import {graphql} from 'react-apollo'
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
    <Layout
      customCss={{
        maxWidth: '45rem',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem',
        margin: '0 auto'
      }}
    >
      <Header location={location} email={email} logo={logo} />
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
  )
}

CvPage.displayName = 'CvPage'

export default graphql(cvQuery)(CvPage)
