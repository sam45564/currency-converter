const { gql } = require('apollo-server')
const typeDefs = gql`
  type User {
    id: Int!
    username: String
    email: String!
  }
  type AuthPayload {
    token: String!
    user: User!
  }
  type Currency {
    name: String!
    abbr: String!
    symbol: String!
  }
  type CountryDetails {
    fullName: String!
    population: Int!
    officialCurrency: Currency!
  }
  type Query {
    user(id: Int!): User
    allUsers: [User!]!
    me: User
    getCountryDetails(name: String!): CountryDetails
    convertCurrency(amount: Float!, targetCurrency: String!): Float
  }
  type Mutation {
    registerUser(username: String, email: String!, password: String!): AuthPayload!
    login (email: String!, password: String!): AuthPayload!
  }
`
module.exports = typeDefs