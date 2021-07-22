import { gql } from "graphql-tag";

export const GET_POSTS_MUTATION(name, email, password) = gql`
  mutation {
    createUser(input: {email: ${email}, name: ${name}, password: ${password} }) {
      id
    }
  }
`;

export default GET_POSTS_MUTATION();
