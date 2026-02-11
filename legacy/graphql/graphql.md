# graphql

---

## Issues with restful routing

1. Deciding on a url schema gets tough when we start having heavily nested related relationships
2. When trying to fetch heavily nested data, we can make too many HTTP requests to get the data that we need.
3. We are vulnerable to over fetching data

## Basic Setup with apollo server

```js
const { ApolloServer, gql } = require('apollo-server')

// SCALAR TYPES:  String, Int, Float, Booleans

//Type Definitions describe how our data is going to look
const typeDefs = gql`
  type Query {
    hello: String!
    numberOfAnimals: Int
    price: Float
    isCool: Boolean
  }
`

//Resolvers return the data we are querying
const resolvers = {
  Query: {
    hello: () => {
      return null
    },
    numberOfAnimals: () => {
      return 55
    },
    price: () => {
      return 34.5697
    },
    isCool: () => {
      return false
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server is running at ${url}`)
})
```
