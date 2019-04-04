import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { css } from '@emotion/core'
import { NextLink, A } from '../styled'
import prefetch from '../../lib/prefetch'

const Link = ({ name, url, apolloQuery, customCss, target }) => (
  <ApolloConsumer>
    {({ query }) => (
      <NextLink url={url} prefetch>
        <A
          css={css`
            ${customCss};
          `}
          target={target}
          onMouseOver={() => prefetch(url)}
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
