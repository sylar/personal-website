import React from 'react'
import {Section, Logo, H2, UL, LI, A, Link, Span, Div} from '../../components'

const PageHeader = ({location, email, logo}) => (
  <Section
    customCss={{
      display: 'flex',
      flexDirection: 'row-reverse',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '.75rem',
      '@media (max-width: 480px)': {
        flexDirection: 'column',
        marginTop: '1.5rem'
      },
      '@media print': {
        marginBottom: '1.5rem'
      }
    }}
  >
    <Logo
      src={logo}
      customCss={{
        marginBottom: 0,
        width: '6rem',
        height: '6rem',
        '@media print': {width: '4.5rem'}
      }}
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
          <Link url="/" prefetch={true}>
            Homepage
          </Link>
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
)

PageHeader.displayName = 'CVPageHeader'

export default PageHeader
