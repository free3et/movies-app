import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TodayIcon from "@mui/icons-material/Today";
import Typography from "@mui/material/Typography";
import { getMovieRuntime } from "../../../hooks/useMovies/helpers";

export const DateGenresTime = ({ release_date, genres, runtime }) => {
  return (
    <Typography mb={2} variant="h4" gutterBottom component="h3">
      <TodayIcon sx={{ fontSize: 20, position: "relative", top: 4 }} />
      &nbsp;
      {release_date}&nbsp;
      {genres?.map((genre, index) => (
        <span key={index}>&nbsp;&#8226;&nbsp;{genre.name}</span>
      ))}
      &nbsp;&#8226;&nbsp;
      <AccessTimeIcon sx={{ fontSize: 20, position: "relative", top: 4 }} />
      &nbsp;
      {getMovieRuntime(runtime)}
    </Typography>
  );
};
