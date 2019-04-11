import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import { index } from "./gql/index";
import { typesQuery } from "./gql/typesQuery";

const schema = makeExecutableSchema({
  typeDefs: [index, typesQuery]
});

export const server = new ApolloServer({
  schema,
  mocks: true
});
