import { gql } from "apollo-server-express";

export default gql`
  input NewUserInput {
    id: ID
    username: String!
    password: String!
  }

  input PlayerInput {
    name: String!
    number: Int!
  }
`;
