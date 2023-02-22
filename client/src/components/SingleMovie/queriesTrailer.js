import { gql } from "@apollo/client";

export const TRAILER_BY_ID = gql`
  query TrailerById($id: Int!) {
    getTrailers(id: $id) {
      id
      results {
        key
        name
        type
      }
    }
  }
`;
