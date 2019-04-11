import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import Queries from "./gql/Queries";
import typesQuery from "./gql/typesQuery";
import Mutations from "./gql/Mutations";
import typesMutation from "./gql/typesMutation";

const schema = makeExecutableSchema({
  typeDefs: [Queries, typesQuery, Mutations, typesMutation]
});

export const server = new ApolloServer({
  schema,
  mocks: true
});
