import React from 'react'
import styled from 'react-emotion'
import Link from 'next/link'

const A = styled('a')(({customCss}) => ({...customCss}))

const NextLink = ({children, url, passHref = false}) => (
  <Link href={url} passHref={passHref}>
    {children}
  </Link>
)

A.displayName = 'A'
NextLink.displayName = 'NextLink'

export {A, NextLink as Link}
