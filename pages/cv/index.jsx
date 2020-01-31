import React, { Fragment } from 'react'
import { Query } from 'react-apollo'
import Head from 'next/head'
import {
  Layout,
  ExperienceSlice,
  SideProjectsSlice,
  HobbiesSlice
} from '../../components'
import { resumePage } from '../../lib/gql-queries'
import Header from './header'
import Content from './content'
import LastUpdate from './lastUpdate'

const PrintNotCopy = () =>
  document.addEventListener('copy', ev => {
    ev.clipboardData.setData(
      'text/plain',
      'To print, use the supplied print button please! Thanks :)'
    )
    ev.preventDefault()
  })

const ResumePage = function () {
  return (
    <Query query={resumePage}>
      {({ data, loading, error }) => {
        if (loading || !data.prismic) {
          return null
        }

        const { resume } = data.prismic
        const {
          lastUpdate,
          location,
          email,
          slices: { experience, side_projects: sideProjects, hobbies },
          logo
        } = resume

        return (
          <>
            <Head>
              <title>Andrei Constantinescu | CV</title>
              <meta name='description' content="Andrei Constantinescu's CV." />
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
                  },,
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
          </>
        )
      }}
    </Query>
  )
}

ResumePage.displayName = 'ResumePage'

export default ResumePage
