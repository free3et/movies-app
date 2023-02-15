import { gql } from "@apollo/client";

export const MOVIES_QUERY = gql`
  query MoviesSearch($filter: MoviesFilter) {
    movies(filter: $filter) {
      page
      totalResults
      totalPages
      results {
        id
        title
        image: posterPath
        releaseDate(format: "dd.MM.yyyy")
        voteAverage
      }
    }
  }
`;
