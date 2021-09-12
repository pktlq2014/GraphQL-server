const { ApolloServer } = require('apollo-server-express');
// load schema && resolvers
var express = require('express'); // Get the module
// load schema + resolvers
const typeDefs = require('./schema/schema')
const resolvers = require("./resolver/resolver")

const http = require("http");
const mongoose = require('mongoose')
var app = express(); // Create express by calling the prototype in var express

const mongoDataMethods = require('./data/db')

// connect to mongoDB
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://graphQL:87623221qweQWE@graphql.lsiba.mongodb.net/GraphQL?retryWrites=true&w=majority',
            err => {
                if (err) throw err;
                console.log("MongoDB connected")
            }
        )
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
connectDB()
let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoDataMethods })
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();
// const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
    res.json({ data: "api working" });
});

app.listen(3050, function () {
    console.log(`Server ready at http://localhost:3050${apolloServer.graphqlPath}`);
});