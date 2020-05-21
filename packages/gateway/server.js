const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const schema = require('./data/schema')

const{ port } = require('./config')
const app = express();

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
)



