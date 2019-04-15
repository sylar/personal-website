import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'

const A = styled('a')(({ customCss }) => ({
  ...customCss,
  '@media print': {
    color: 'black',
    textDecoration: 'none',
    ...customCss['@media print']
  }
}))

const NextLink = ({ children, url, passHref, apolloQuery, shouldPrefetch }) => (
  <Link href={url} passHref={passHref} prefetch={shouldPrefetch}>
    {children}
  </Link>
)

A.displayName = 'A'
NextLink.displayName = 'NextLink'

A.defaultProps = {
  customCss: {}
}

NextLink.defaultProps = {
  children: null,
  url: '',
  shouldPrefetch: true,
  passHref: true
}

export { A, NextLink }
