import { gql } from "@apollo/client";

export const MOVIE_BY_ID = gql`
  query MovieById($id: Int!) {
    getSingleMovie(id: $id) {
      id
      title
      posterPath
      overview
      voteAverage
      backdropPath
      popularity
      tagline
      runtime
      backdropPath
      genres {
        id
        name
      }
      productionCompanies {
        id
        name
        logoPath
      }
    }
  }
`;
