import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { css } from '@emotion/core'
import { NextLink, A } from '../styled'

const isExternal = function(url) {
  return /https?/.test(url)
}

const Link = ({ label, url, apolloQuery, customCss, target }) => (
  <NextLink url={url} shouldPrefetch={!isExternal(url)}>
    <A
      css={css`
        ${customCss};
      `}
      target={target}
    >
      {label}
    </A>
  </NextLink>
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
