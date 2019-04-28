import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import Queries from "./gql/Queries";
import Types from "./gql/types";
import Mutations from "./gql/Mutations";
import Inputs from "./gql/inputs";
// import QueryResolvers from "./resolvers/QueryResolver";
import MutationResolvers from "./resolvers/MutationResolver";

const schema = makeExecutableSchema({
  typeDefs: [Queries, Types, Mutations, Inputs],
  resolvers: [MutationResolvers]
});

export const server = new ApolloServer({
  schema
});
