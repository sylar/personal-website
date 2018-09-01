import React from 'react'
import {ApolloConsumer} from 'react-apollo'
import {css} from 'react-emotion'
import {NextLink, A} from '../styled'

const Link = ({name, url, prefetch, apolloQuery, customCss, target}) => (
  <ApolloConsumer>
    {({query}) => (
      <NextLink url={url} prefetch={prefetch}>
        <A
          css={css`
            ${customCss};
          `}
          target={target}
          onMouseEnter={() => (apolloQuery ? query({query: apolloQuery}) : {})}
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
