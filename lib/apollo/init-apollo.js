import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { createPersistedQueryLink } from 'apollo-link-persisted-queries'
import { createHttpLink } from 'apollo-link-http'
import fetch from 'isomorphic-unfetch'

const getCorrentGqlEndpoint = function getCorrentGqlEndpoint () {
  return process.env.NOW_ENV === 'staging'
    ? process.env.STAGING_GRAPHQL_ENDPOINT
    : process.env.GRAPHQL_ENDPOINT
}

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

function create (initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: createPersistedQueryLink({ useGETForHashedQueries: true }).concat(
      createHttpLink({ uri: getCorrentGqlEndpoint() })
    ),
    cache: new InMemoryCache().restore(initialState || {}),
    shouldBatch: true
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
