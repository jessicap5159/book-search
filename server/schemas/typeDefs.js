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

type Query {
    // for getSingleUser by id or username
    user(_id: ID!): User
    user(username: String!): User
}

type Mutation {
    // for login, createUser, saveBook, deleteBook
    login(username: String!, email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    saveBook()
    deleteBook()
    
}
`;

// export the typeDefs
module.exports = typeDefs;