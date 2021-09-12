const { gql } = require('apollo-server-express')
const typeDefs = gql`
    type Book {
        id: ID!
        name: String
        genre: String
        author: Author
    }
    type Author {
        id: ID! 
        name: String
        age: Int
        book: [Book]
    }
    # ROOT TYPE
    type Query {
        books: [Book]
        book(id: ID): Book
        authors: [Author]
    }
    type Mutation {
        createAuthor(name: String, age: Int): Author
        createBook(name: String, genre: String, authorId: String): Book
    }
`
// ID! là bắt buộc khi truyền id, id không được phép = null
module.exports = typeDefs;