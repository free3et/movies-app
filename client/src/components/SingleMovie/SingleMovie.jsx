import PropTypes from "prop-types";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { API_BASE_URL, IMG_FULL_SIZE, IMG_PATH } from "../../config/constants";
import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { TRAILER_BY_ID } from "./queriesTrailer";
import { AppContext } from "../../context";

import { theme } from "../../theme";
import { Button } from "@mui/material";
import { DateGenresTime } from "./components/DateGanresTime";
import { TableAverageBudget } from "./components/TableAverageBudget";
import { Companies } from "./components/Companies";
import { Casts } from "./components/Casts";
import { Crew } from "./components/Crew";

export const SingleMovie = () => {
  const [response, setResponse] = useState({});
  const [firstTrailer, setFirstTrailer] = useState({});

  const { state, dispatch } = useContext(AppContext);

  const params = useParams();

  const id = +params.id;

  const {
    loading: movieLoading,
    error: movieError,
    data: trailerData,
  } = useQuery(TRAILER_BY_ID, {
    variables: { id },
  });

  const trailers = trailerData?.getTrailers.results.filter(
    (trailer) => trailer.type === "Trailer"
  );

  useEffect(() => {
    trailers?.map((item, index) => {
      if (index === 0) {
        setFirstTrailer(item);
      }
    });
  }, [trailers]);

  /* const {
    loading: movieLoading,
    error: movieError,
    data: movie,
  } = useQuery(MOVIE_BY_ID, {
    variables: { id },
  });

  const itemMovie = movie?.getSingleMovie; */

  useEffect(() => {
    fetch(
      `${API_BASE_URL}/movie/${id}?api_key=1ff4ddf105b2910f49fe4bc6cf81723d&language=${state.locale}&append_to_response=credits`
    )
      .then((response) => {
        // Networks errors
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network failed", { cause: response.status });
      })
      .then((data) => {
        setResponse(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, state.locale]);

  if (!response) return;

  const {
    adult,
    poster_path,
    budget,
    revenue,
    genres,
    homepage,
    overview,
    production_companies,
    release_date,
    title,
    runtime,
    tagline,
    vote_average,
    credits,
  } = response;

  function compare(a, b) {
    if (a.popularity > b.popularity) {
      return -1;
    }
    if (a.popularity < b.popularity) {
      return 1;
    }
    return 0;
  }

  const sortedCastCompare = credits?.cast.sort(compare);

  const sortedCast = sortedCastCompare?.filter((item) => item.popularity > 9);

  const sortedCrewCompare = credits?.crew.sort(compare);

  const sortedCrew = sortedCrewCompare?.filter((item) => item.popularity > 10);

  const MovieInfo = styled(Box)(() => ({
    height: "500",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left calc((50vw - 170px) - 340px) top",
    backgroundImage: `url(${IMG_FULL_SIZE}${poster_path})`,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
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
        "linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 30%, rgba(31.5, 31.5, 31.5, 0.84) 100%)",
    },
  }));

  return (
    <Container maxWidth="xl" disableGutters>
      <MovieInfo>
        <Grid container spacing={2} sx={{ zIndex: 1, color: "white" }}>
          <Grid item xs={3}>
            <CardMedia
              component="img"
              height="450"
              width="auto"
              image={`${IMG_PATH}${poster_path}`}
              alt={title}
              sx={{ borderRadius: "5px", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={9}>
            <Box ml={3}>
              <Typography variant="h2" gutterBottom component="h2">
                {title}
              </Typography>

              <DateGenresTime
                release_date={release_date}
                genres={genres}
                runtime={runtime}
              />

              {homepage && (
                <Button href={homepage} variant="outlined" color="success">
                  Movie Home page
                </Button>
              )}

              <Typography mb={0} variant="h3" gutterBottom component="h3">
                Tagline: {tagline}
              </Typography>
              <Typography
                mb={0}
                variant="subtitle2"
                gutterBottom
                component="h3"
              >
                Overview: {overview}
              </Typography>

              <TableAverageBudget
                vote_average={vote_average}
                budget={budget}
                revenue={revenue}
              />

              <Grid container spacing={1} gap={3}>
                <Crew sortedCrew={sortedCrew} />
              </Grid>
            </Box>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center">
              <Box m={3} ml={4}>
                <iframe
                  width="700px"
                  height="400px"
                  src={`https://www.youtube.com/embed/${firstTrailer?.key}?controls=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </MovieInfo>
      <Container maxWidth="lg">
        <Grid item xs={12}>
          <Companies production_companies={production_companies} />
        </Grid>
      </Container>

      <Typography
        mb={3}
        variant="h2"
        gutterBottom
        component="h3"
        align="center"
      >
        Top Billed Cast
      </Typography>
      <Grid
        container
        justifyContent="center"
        sx={{
          background:
            "linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 60%, rgba(31.5, 31.5, 52.5, 0.84) 100%)",
          padding: "20px 0",
        }}
      >
        <Casts sortedCast={sortedCast} />
      </Grid>
    </Container>
  );
};
