import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: ID
    username: String
    team: [Player]
  }

  type Player {
    name: String
    number: Int
  }
`;
