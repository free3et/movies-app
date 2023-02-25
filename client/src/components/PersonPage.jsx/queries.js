import { gql } from "@apollo/client";

export const PERSON_BY_ID = gql`
  query PersonById($id: Int!) {
    getPerson(id: $id) {
      biography
      birthday
      deathday
      gender
      homepage
      name
      placeOfBirth
      profilePath
    }
  }
`;
