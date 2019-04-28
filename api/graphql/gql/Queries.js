import { gql } from "apollo-server-express";

export default gql`
  type Query {
    getUsers: [User]
    getUserByUsername(username: String!): User
    getUserById(id: String!): User
  }
`;
