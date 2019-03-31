import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { css } from '@emotion/core'
import { NextLink, A } from '../styled'
// import prefetchWithData from '../../lib/prefetchWithData'

const Link = ({ name, url, prefetch, apolloQuery, customCss, target }) => (
  <ApolloConsumer>
    {({ query }) => (
      <NextLink url={url} prefetch={prefetch}>
        <A
          css={css`
            ${customCss};
          `}
          target={target}
          // onMouseOver={() => prefetchWithData(url)}
        >
          {name}
        </A>
      </NextLink>
    )}
  </ApolloConsumer>
)

Link.displayName = 'Link'
Link.defaultProps = {
  name: '',
  url: '',
  prefetch: false,
  apolloQuery: null,
  customCss: ''
}

export default Link
