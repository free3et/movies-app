import { useSearchParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { MOVIES_QUERY_BY_IDS } from "./queries";
import { useQuery } from "@apollo/client";
import { Loader } from "../../components/Loader/Loader";
import { MovieCard } from "../../components/MovieCard/MovieCard";

export const Recomendations = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        <Typography variant="h2" component="h2" gutterBottom>
          {searchParams.get("title")}
        </Typography>

        {data?.moviesByIds && (
          <Grid container spacing={2}>
            {data.moviesByIds.map((movie) => (
              <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
                <MovieCard movie={movie} isPreviewMode />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};
