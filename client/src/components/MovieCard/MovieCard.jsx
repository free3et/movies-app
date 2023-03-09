import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { styled } from "@mui/material/styles";
import { CardMenu } from "../CardMenu/CardMenu";
import { FavouriteIcon } from "./FavouriteIcon";
import { Link } from "react-router-dom";
import { getMovieRuntime } from "../../hooks/useMovies/helpers";

const CardInfo = styled(CardContent)(({ theme }) => ({
  padding: 10,

  "&:last-child": {
    paddingBottom: theme.spacing(1),
  },
  /* ":after": {
    content: '""',
    display: "block",
    backgroundImage: `url(
      "https://img.freepik.com/premium-vector/sound-waves-with-halftone-effect-music-equalizer-club-party-pub-concert-musical-pulse_185386-779.jpg"
    )`,
    width: "100%",
    height: "30px",
    backgroundPosition: "50% 50px",
    backgroundSize: "cover",
  }, */
}));

export const MovieCard = ({
  movie,
  onCardSelect,
  deleteMovie,
  isPreviewMode,
}) => {
  const time = movie.runtime;
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "visible",
        borderRadius: "12px",
      }}
    >
      {!isPreviewMode && (
        <FavouriteIcon
          onCardSelect={onCardSelect}
          deleteMovie={deleteMovie}
          movie={movie}
        />
      )}

      {/*      {!isPreviewMode && (
        <CardMenu>
          <MenuItem onClick={() => onCardSelect(movie)}>Select</MenuItem>
        </CardMenu>
      )} */}
      <Link to={`/movie/${movie.id}`}>
        <CardMedia
          component="img"
          sx={{ minHeight: "200px" }}
          image={movie.image}
          alt={movie.title}
        />
      </Link>

      <CardInfo sx={{ position: "relative" /* minHeight: "105px" */ }}>
        <Link
          to={`/movie/${movie.id}`}
          style={{
            color: "#031d33",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          {movie.title}
        </Link>

        <Typography mt={1} variant="caption" gutterBottom component="h3">
          <TodayIcon
            sx={{ fontSize: 20, position: "relative", top: 4, mr: 0.5 }}
          />
          {movie.releaseDate}
        </Typography>
        {time && (
          <Typography mt={1} variant="caption" gutterBottom component="h3">
            <AccessTimeIcon
              sx={{ fontSize: 20, position: "relative", top: 4, mr: 0.5 }}
            />
            {getMovieRuntime(time)}
          </Typography>
        )}
        <Box
          sx={{
            position: "absolute",
            display: "inline-flex",
            right: "-4px",
            bottom: "-4px",
          }}
        >
          <CircularProgress
            variant="determinate"
            value={(movie.voteAverage / 10) * 100}
            color="success"
            thickness="4.5"
            size={45}
          />

          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="caption" component="div" color="primary">
              {`${movie.voteAverage?.toFixed(2)}`}
            </Typography>
          </Box>
        </Box>
      </CardInfo>
    </Card>
  );
};

/* MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
  onGetDetails: PropTypes.func,
  isPreviewMode: PropTypes.bool,
}; */
