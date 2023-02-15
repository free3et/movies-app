import { gql } from "@apollo/client";

export const SEARCH_QUERY = gql`
  query SearchOnSite($queryStr: SearchFilter) {
    search(queryStr: $queryStr) {
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
