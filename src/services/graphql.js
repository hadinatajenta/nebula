import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// Create HTTP link to GraphQL endpoint
const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:4000/graphql',
})

// Auth link to add token to headers
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        }
    }
})

// Create Apollo Client instance
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
        },
    },
})

export default apolloClient
