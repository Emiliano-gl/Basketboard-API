import { gql } from "apollo-server-express";

export const index = gql`
  type Query {
    users: [User]
  }
`;
