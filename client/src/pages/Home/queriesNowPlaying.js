import { gql } from "@apollo/client";

export const NOW_PLAYING_QUERY = gql`
  query NowPlaying {
    getNowPlayingMovie {
      page
      totalResults
      totalPages
      results {
        id
        title
        image: posterPath
      }
    }
  }
`;
