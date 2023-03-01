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
      credits {
        cast {
          id
          title
          character
          releaseDate
          voteAverage
          image: posterPath
          popularity
        }
      }
    }
  }
`;
