const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3000);

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true
});

server.applyMiddleware({ app, path: "/" });

app.listen(app.get("port"), () =>
  console.log(`🚀 Server on http://localhost:${app.get("port")}`)
);
