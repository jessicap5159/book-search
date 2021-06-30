// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Book {
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
}

type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
}

`;

// export the typeDefs
module.exports = typeDefs;