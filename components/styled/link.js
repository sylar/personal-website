import React from 'react'
import styled from 'react-emotion'
import Link from 'next/link'

const A = styled('a')(({customCss}) => ({...customCss}))

const NextLink = ({children, url}) => (
  <Link href={url} passHref={true} prefetch={true}>
    {children}
  </Link>
)

A.displayName = 'A'
NextLink.displayName = 'NextLink'

export {A, NextLink as Link}
