import { gql } from "apollo-server-express";

export default gql`
  input UserInput {
    id: ID
    username: String!
  }
`;
