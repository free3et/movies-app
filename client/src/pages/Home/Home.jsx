import { useQuery } from "@apollo/client";
import { FormattedMessage } from "react-intl";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import { useMovies } from "../../hooks/useMovies/useMovies";
import { MOVIES_QUERY } from "./queries";
import { SEARCH_QUERY } from "../../components/Search/queries";
import { styled } from "@mui/material/styles";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Loader } from "../../components/Loader/Loader";
import FavouriteMovies from "../../components/MovieCardSelected/favourite_movies.png";
import { SelectedMoviesSection } from "../../components/MovieCardSelected/SelectedMoviesSection/SelectedMoviesSection";
import { Filters } from "../../components/Filters/Filters";
import { useFilters } from "../../hooks/useMovies/useFilters";
import { useSearch } from "../../hooks/useMovies/useSearch";
import { Search } from "../../components/Search/Search";
import { NOW_PLAYING_QUERY } from "./queriesNowPlaying";
import { HeroImg } from "../../components/HeroImg/HeroImg";

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  //height: "calc(100vh - 150px)",
  //overflow: "scroll",
  position: "sticky",
  top: theme.spacing(2),
}));

export const Home = () => {
  const { selectedMovies, selectMovie, deleteMovie } = useMovies();

  // Filter for movies
  const { filter, setFilter, setPage } = useFilters();

  const {
    loading,
    error,
    data: moviesData,
  } = useQuery(MOVIES_QUERY, {
    variables: { filter },
  });

  // Now Playing

  const {
    loading: loadingNowPlaying,
    error: errorNowPlaying,
    data: dataNowPlaying,
  } = useQuery(NOW_PLAYING_QUERY);

  const NowPlayingImg = dataNowPlaying?.getNowPlayingMovie?.results[1];

  // Search
  const { queryStr, setSearchPage, setSearchFilter } = useSearch();

  const {
    loading: searchLoading,
    error: searchError,
    data,
  } = useQuery(SEARCH_QUERY, {
    variables: { queryStr },
  });

  const isSearchEmpty = data?.search?.results.length === 0;

  const paginationHandler = (event, page) => {
    isSearchEmpty ? setPage(+page) : setSearchPage(+page);
  };

  if (loading) return <Loader />;
  if (error) return <p>Error : {error.message}</p>;

  function onSubmit(moviesData) {
    setFilter(moviesData);
  }

  function onSearchSubmit(data) {
    setSearchFilter(data);
  }

  const pagesCount =
    moviesData?.movies?.totalPages <= 500
      ? moviesData?.movies?.totalPages
      : 500;

  const pagesSearchCount =
    data?.search?.totalPages <= 500 ? data?.search?.totalPages : 500;

  return (
    <>
      <HeroImg NowPlayingImg={NowPlayingImg} />

      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Search onSubmit={onSearchSubmit} />

        <Grid container spacing={2} mt={1}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Filters onSubmit={onSubmit} initialValues={filter} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box>
              <Paper>
                <Pagination
                  sx={{
                    m: "0px 10px 20px",
                    p: 1,
                    display: "flex",
                    justifyContent: "center",
                  }}
                  count={isSearchEmpty ? pagesCount : pagesSearchCount}
                  shape="rounded"
                  color="warning"
                  //variant="outlined"

                  page={isSearchEmpty ? filter.page : queryStr.page}
                  onChange={paginationHandler}
                />
              </Paper>

              {loading && <Loader />}
              {searchLoading && <Loader />}
              {moviesData && (
                <>
                  <Grid container spacing={2}>
                    {isSearchEmpty
                      ? moviesData.movies.results.map((movie) => (
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={movie.id}
                          >
                            <MovieCard
                              movie={movie}
                              onCardSelect={selectMovie}
                              deleteMovie={deleteMovie}
                            />
                          </Grid>
                        ))
                      : data?.search?.results.map((movie) => (
                          <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            key={movie.id}
                          >
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
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectedMovies>
              <Typography
                mb={3}
                variant="h4"
                gutterBottom
                component="h3"
                align="center"
              >
                <FormattedMessage id="moviesRecomendations" />
              </Typography>

              <>
                {!selectedMovies.length && (
                  <>
                    <img
                      src={FavouriteMovies}
                      alt={moviesData.movies.title}
                      style={{
                        width: "100%",
                        padding: "0 20px 20px",
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
    </>
  );
};
