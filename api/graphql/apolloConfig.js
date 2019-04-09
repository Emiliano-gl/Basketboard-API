import { ApolloServer, gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export const server = new ApolloServer({
  typeDefs,
  mocks: true
});
