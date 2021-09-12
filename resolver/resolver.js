const { mongo } = require("mongoose");

const resolvers = {
    // QUERY -> là lấy ra data
    Query: { // Query này lấy từ ben schema.js
        books: async (parent, args, { mongoDataMethods }) => {
            await mongoDataMethods.getAllBooks()
        },
        book: async (parent, { id }, { mongoDataMethods }) =>
            await mongoDataMethods.getBookById(id),
        // authors: async (parent, args, { mongoDataMethods }) => {
        //     await mongoDataMethods.getAllAuthors()
        // },
        // author: async (parent, { id }, { mongoDataMethods }) =>
        //     await mongoDataMethods.getAuthorById(id),
    },
    Book: {
        // cái author này là khóa ngoài bên đối tượng Book file schema.js
        author: async ({ authorId }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAuthorById(authorId)
    },
    Author: {
        book: async ({ id }, args, { mongoDataMethods }) =>
            await mongoDataMethods.getAllBooks({ authorId: id })
    },
    // MUTATION -> là thêm, xóa, sửa
    Mutation: {
        createAuthor: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.createAuthor(args),
        createBook: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.createBook(args),
        // {
        //     id: 3,
        //     name: 'Võ Thị Sáu',
        //     age: 90
        // }
    }
}
module.exports = resolvers;