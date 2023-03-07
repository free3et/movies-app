import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { MOVIES_QUERY_BY_IDS } from "./queries";
import { Loader } from "../../components/Loader/Loader";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { NOW_PLAYING_QUERY } from "../Home/queriesNowPlaying";
import { Paper } from "@mui/material";

export const Recomendations = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const {
    loading: loadingNowPlaying,
    error: errorNowPlaying,
    data: dataNowPlaying,
  } = useQuery(NOW_PLAYING_QUERY);

  const popularMovies = dataNowPlaying?.getNowPlayingMovie?.results?.filter(
    (item) => item.voteAverage > 7
  );

  const idsData = searchParams.get("ids")?.split(",");

  const { loading, error, data } = useQuery(MOVIES_QUERY_BY_IDS, {
    variables: {
      ids: idsData.map((id) => +id),
    },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Box sx={{ flexGrow: 1 }} alignContent="center">
              <Paper>
                <Typography variant="h4" component="h2" align="center" pt={2}>
                  Your recomendations "{searchParams.get("title")}"
                </Typography>
                <Grid container spacing={2} p={2}>
                  {data.moviesByIds.map((movie) => (
                    <Grid key={movie.id} item xs={12} sm={4} md={4} lg={4}>
                      <MovieCard movie={movie} isPreviewMode />
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper
              sx={{ flexGrow: 1, padding: 1, background: "#ddd" }}
              alignContent="center"
            >
              <Typography
                variant="h4"
                component="h3"
                align="center"
                p={"8px 16px"}
              >
                Now Playing
              </Typography>
              <Grid container spacing={2} p={2}>
                {popularMovies?.map((movie) => (
                  <Grid key={movie.id} item xs={12} sm={6} md={12} lg={6}>
                    <MovieCard movie={movie} isPreviewMode />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
