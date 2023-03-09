import { gql } from "@apollo/client";

export const MOVIES_QUERY_BY_IDS = gql`
  query MoviesByIds($ids: [Int]) {
    moviesByIds(ids: $ids) {
      id
      title
      image: posterPath
      releaseDate(format: "dd.MM.yyyy")
      voteAverage
      runtime
      backdropPath
    }
  }
`;
