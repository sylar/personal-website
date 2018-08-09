import React from 'react'
import {graphql} from 'react-apollo'
import {
  Layout,
  Logo,
  UL,
  LI,
  H2,
  A,
  Span,
  Section,
  Div,
  ExperienceSlice,
  SideProjectsSlice,
  HobbiesSlice
} from '../components'
import {cvQuery} from '../lib/gql'

const CvPage = ({data: {resume}}) => {
  const {
    lastUpdate,
    location,
    email,
    slices: {experience, sideProjects, hobbies},
    logo
  } = resume

  return (
    <Layout
      customCss={{
        maxWidth: '45rem',
        display: 'flex',
        flexDirection: 'column',
        padding: '3rem',
        marginTop: 0
      }}
    >
      <Section
        customCss={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '.75rem',
          '@media (max-width: 480px)': {
            flexDirection: 'column'
          },
          '@media print': {
            marginBottom: '1.5rem'
          }
        }}
      >
        <Logo
          src={logo}
          customCss={{marginBottom: 0, '@media print': {width: '4.5rem'}}}
        />
        <Div
          customCss={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}
        >
          <H2 customCss={{marginBottom: 0, '@media print': {margin: 0}}}>
            Andrei Constantinescu
          </H2>
          <UL
            customCss={{
              fontSize: '.8rem',
              listStyle: 'none',
              display: 'flex',
              padding: 0,
              marginTop: 0,
              width: '100%',
              lineHeight: 1.8,
              '@media (max-width: 480px)': {
                flexDirection: 'column'
              },
              '@media print': {
                display: 'none'
              }
            }}
          >
            <LI
              customCss={{
                marginRight: '.5rem'
              }}
            >
              <A href="/">Homepage</A>
            </LI>
            <LI
              customCss={{
                marginRight: '.5rem'
              }}
            >
              <A href={email}>Email</A>
            </LI>
            <LI
              customCss={{
                marginRight: '.5rem'
              }}
            >
              <Span>{location}</Span>
            </LI>
          </UL>
        </Div>
      </Section>

      <ExperienceSlice
        items={experience.content}
        headerText={experience.title}
      />

      <SideProjectsSlice
        headerText={sideProjects.title}
        items={sideProjects.content}
      />

      <HobbiesSlice
        headerText={hobbies.title}
        description={hobbies.description}
      />
    </Layout>
  )
}

CvPage.displayName = 'CvPage'

export default graphql(cvQuery)(CvPage)
