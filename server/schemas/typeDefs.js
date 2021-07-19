// import our dependencies
const { gql } = require('apollo-server-express');

// create the gql typeDefs to export
const typeDefs = gql`

    type User {
        _id: ID!
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        description: String
        authors: [String]
        image: String
        link: String
        title: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookData: BookInput): User
        removeBook(bookId: ID!): User
    }

    input BookInput {
        title: String
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
    }
`;

module.exports = typeDefs;
