import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    addUser(newUserInput: NewUserInput!): NewUser
    addTeam(search: String!, teamInput: [PlayerInput]!): User
  }
`;
