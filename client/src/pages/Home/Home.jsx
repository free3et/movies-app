import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FormattedMessage } from "react-intl";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useMovies } from "../../hooks/useMovies/useMovies";
import { MOVIES_QUERY } from "./queries";
import { styled } from "@mui/material/styles";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Loader } from "../../components/Loader/Loader";
import FavouriteMovies from "../../components/MovieCardSelected/favourite_movies.png";
import { SelectedMoviesSection } from "../../components/MovieCardSelected/SelectedMoviesSection/SelectedMoviesSection";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "calc(100vh - 150px)",
  overflow: "scroll",
  position: "sticky",
  top: theme.spacing(2),
}));

export const Home = () => {
  const [page, setPage] = useState(1);
  const MAX_PAGES_SIZE = 500;
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  const paginationHandler = (event, page) => {
    setPage(page);
  };

  const { loading, error, data } = useQuery(MOVIES_QUERY, {
    variables: { page },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Box sx={{ flexGrow: 1, marginTop: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper>Filters sections</Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper>
            <Box sx={{ flexGrow: 1, padding: 2 }}>
              {loading && <Loader />}
              {data && (
                <>
                  <Stack spacing={2}>
                    <Pagination
                      count={MAX_PAGES_SIZE}
                      shape="rounded"
                      //color="secondary"
                      page={page}
                      onChange={paginationHandler}
                    />
                  </Stack>
                  <Grid container spacing={1}>
                    {data.movies.results.map((movie) => (
                      <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                        <MovieCard
                          movie={movie}
                          onCardSelect={selectMovie}
                          deleteMovie={deleteMovie}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </>
              )}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <SelectedMovies>
            <h2>
              <FormattedMessage id="moviesRecomendations" />
            </h2>
            <>
              {!selectedMovies.length && (
                <>
                  <img
                    src={FavouriteMovies}
                    alt={data.movies.title}
                    style={{
                      width: "100%",
                    }}
                  />
                </>
              )}
              <SelectedMoviesSection
                selectedMovies={selectedMovies}
                deleteMovie={deleteMovie}
              />
            </>
          </SelectedMovies>
        </Grid>
      </Grid>
    </Box>
  );
};
