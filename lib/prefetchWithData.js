import Router from 'next/router'
import {format, resolve, parse} from 'url'

export default async href => {
  // if  we're running server side do nothing
  if (typeof window === 'undefined') return

  const url = typeof href !== 'string' ? format(href) : href

  const {pathname} = window.location

  const parsedHref = resolve(pathname, url)

  const {query} = typeof href !== 'string' ? href : parse(url, true)

  // get component reference
  const Component = await Router.prefetch(parsedHref)
  console.log('prefetched', href)

  // fetch the component props
  // and cache locally, handled within getInitialProps
  if (Component && Component.getInitialProps) {
    const ctx = {pathname: href, query, isVirtualCall: true}
    await Component.getInitialProps(ctx)
    console.log('added initial props to ', Component.displayName)
  }
}
