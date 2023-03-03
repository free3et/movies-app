import { useQuery } from "@apollo/client";
import { FormattedMessage } from "react-intl";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
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
import { IMG_FULL_SIZE } from "../../config/constants";
import { NOW_PLAYING_QUERY } from "./queriesNowPlaying";

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

  const SearchBg = styled(Box)(() => ({
    height: "450px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundImage: `url(${NowPlayingImg?.image})`,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "flex-end",
    padding: "40px",
    position: "relative",

    "&:after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage:
        "linear-gradient(to right, rgba(31.5, 31.5, 31.5, .8) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.6) 30%, rgba(31.5, 31.5, 31.5, 0.4) 100%)",
    },
  }));

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
    isSearchEmpty ? setPage(page) : setSearchPage(page);
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
      <Container maxWidth="xl" disableGutters>
        <SearchBg>
          <Grid
            container
            spacing={2}
            sx={{ zIndex: 1, flexDirection: "column" }}
          >
            <Typography
              variant="h1"
              gutterBottom
              component="h1"
              color="secondary"
            >
              Welcome
            </Typography>

            <Typography
              variant="h2"
              gutterBottom
              component="h2"
              color="secondary"
              mb={4}
            >
              Millions of movies and people to discover <br /> Explore now
            </Typography>
            <Search onSubmit={onSearchSubmit} />
          </Grid>
        </SearchBg>
      </Container>
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <Filters onSubmit={onSubmit} initialValues={filter} />
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper>
              <Box sx={{ flexGrow: 1, padding: 2 }}>
                {loading && <Loader />}
                {searchLoading && <Loader />}
                {moviesData && (
                  <>
                    <Stack spacing={2}>
                      <Pagination
                        sx={{
                          m: 2,
                          display: "flex",
                          justifyContent: "center",
                        }}
                        count={isSearchEmpty ? pagesCount : pagesSearchCount}
                        shape="rounded"
                        color="warning"
                        page={isSearchEmpty ? filter.page : queryStr.page}
                        onChange={paginationHandler}
                      />
                    </Stack>
                    <Grid container spacing={1}>
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
                      alt={moviesData.movies.title}
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
    </>
  );
};
