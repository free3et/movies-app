import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { CardMenu } from "../CardMenu/CardMenu";
import { FavouriteIcon } from "./FavouriteIcon";
import { Link } from "react-router-dom";

const CardInfo = styled(CardContent)(({ theme }) => ({
  padding: 10,

  "&:last-child": {
    paddingBottom: theme.spacing(3),
  },
}));

export const MovieCard = ({
  movie,
  onCardSelect,
  deleteMovie,
  isPreviewMode,
}) => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      {!isPreviewMode && (
        <FavouriteIcon
          onCardSelect={onCardSelect}
          deleteMovie={deleteMovie}
          movie={movie}
        />
      )}

      {!isPreviewMode && (
        <CardMenu>
          <MenuItem onClick={() => onCardSelect(movie)}>Select</MenuItem>
        </CardMenu>
      )}

      <CardMedia
        component="img"
        height="265"
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo>
        <Link
          to={`/movie/${movie.id}`}
          /*  style={{
            color: "#031d33",
            textDecoration: "none",
            textTransform: "none",
            fontWeight: 600,
          }} */
        >
          {movie.title}
        </Link>

        <Typography mb={0} variant="subtitle2" gutterBottom component="h3">
          {movie.voteAverage}
        </Typography>
        <Typography mb={0} variant="subtitle2" gutterBottom component="h3">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
      <Link to={`/movie/${movie.id}`}>Info</Link>
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
