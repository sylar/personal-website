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

const NextLink = ({ children, url, prefetch, passHref, apolloQuery }) => (
  <Link href={url} passHref={passHref} prefetch>
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
  prefetch: false,
  passHref: true
}

export { A, NextLink }
