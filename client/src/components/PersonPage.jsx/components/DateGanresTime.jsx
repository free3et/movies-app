import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TodayIcon from "@mui/icons-material/Today";
import Typography from "@mui/material/Typography";

export const DateGenresTime = ({
  birthday,
  deathday,
  gender,
  placeOfBirth,
}) => {
  const getMovieRuntime = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;

    return `${hours}h ${minutes}m`;
  };
  return (
    <Typography mb={2} variant="h4" gutterBottom component="h3">
      <TodayIcon sx={{ fontSize: 20, position: "relative", top: 4 }} />
      &nbsp;
      {birthday}&nbsp;
      <span>&nbsp;&#8226;&nbsp;{placeOfBirth}</span>
      &nbsp;&#8226;&nbsp;
      <AccessTimeIcon sx={{ fontSize: 20, position: "relative", top: 4 }} />
      &nbsp;
      {gender}
    </Typography>
  );
};
