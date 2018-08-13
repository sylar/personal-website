import {createPersistedQueryLink} from 'apollo-link-persisted-queries'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloLink} from 'apollo-link'
import ApolloClient from 'apollo-client'
import fetch from 'isomorphic-unfetch'
import getConfig from 'next/config'

const {
  publicRuntimeConfig: {GRAPHQL_ENDPOINT}
} = getConfig()

let apolloClient = null

const link = ApolloLink.from([
  createPersistedQueryLink({useGETForHashedQueries: true}),
  createHttpLink({uri: GRAPHQL_ENDPOINT})
])

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: link,
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo (initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
