import { gql } from 'graphql-tag'
import apolloClient from './graphql'

// GraphQL mutation for login
export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                id
                email
                name
            }
        }
    }
`

// Login function
export const login = async (email, password) => {
    try {
        const { data } = await apolloClient.mutate({
            mutation: LOGIN_MUTATION,
            variables: { email, password }
        })

        if (data?.login?.token) {
            // Store token in localStorage
            localStorage.setItem('token', data.login.token)

            // Store user info
            localStorage.setItem('user', JSON.stringify(data.login.user))

            return {
                success: true,
                data: data.login
            }
        }

        return {
            success: false,
            error: 'Invalid response from server'
        }
    } catch (error) {
        return {
            success: false,
            error: error.message || 'Login failed'
        }
    }
}

// Logout function
export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    apolloClient.clearStore()
}

// Check if user is authenticated
export const isAuthenticated = () => {
    return !!localStorage.getItem('token')
}

// Get current user
export const getCurrentUser = () => {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
}
