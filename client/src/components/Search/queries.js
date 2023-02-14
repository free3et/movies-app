import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  query Search($query: String) {
    search(query: $query) {
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
