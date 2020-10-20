const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const Post = require('./models/contract');
const { mongoDB } = require('./config.js');

const typeDefs =  gql`
    type Query{
        getContracts     
    }

`

const resolvers = {
    Query: {
        sayHi: () => 'Hi, new user!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(mongoDB, { useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB connected successfully');
        return server.listen({port: 5000});
    })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    })