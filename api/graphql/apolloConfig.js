import { ApolloServer } from "apollo-server-express";
import typeDefs from "./gql/User.gql"

export const server = new ApolloServer({
  typeDefs,
  mocks: true
});
