'use client'
import NextLink from 'next/link'
import { LinkProps } from './types'

const Link = ({ url, label, internal }: LinkProps) =>
  internal ? (
    <NextLink href={url} passHref={!internal}>
      <a>{label}</a>
    </NextLink>
  ) : (
    <a href={url} target="_blank" rel="noreferrer">
      {label}
    </a>
  )
export default Link
