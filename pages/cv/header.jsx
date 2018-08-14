import React from 'react'
import {Header, Logo, H2, UL, LI, A, Link, Span, Div} from '../../components'

const PageHeader = ({location, email, logo}) => (
  <Header
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
        margin: 0
      }
    }}
  >
    <Logo
      src={logo}
      customCss={{
        marginBottom: 0,
        width: '6rem',
        height: '6rem',
        '@media print': {height: '4.5rem'}
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
            <A>Homepage</A>
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
  </Header>
)

PageHeader.displayName = 'CVPageHeader'

export default PageHeader
