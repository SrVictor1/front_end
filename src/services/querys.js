import { gql } from "graphql-tag";

export const GET_POSTS_QUERY = gql`
  query {
    getAllUsers {
      id
    }
  }
`;

export default GET_POSTS_QUERY;
