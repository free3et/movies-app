import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { CardMenu } from "../CardMenu/CardMenu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";

const CardInfo = styled(CardContent)(({ theme }) => ({
  padding: 10,

  "&:last-child": {
    paddingBottom: theme.spacing(1),
  },
}));

export const MovieCard = ({ movie, onCardSelect, deleteMovie }) => {
  const [favourite, setFavourite] = useState();
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      {favourite ? (
        <FavoriteIcon
          fontSize="medium"
          onClick={() => {
            onCardSelect(movie);
            deleteMovie(movie);
            setFavourite(false);
          }}
          sx={{
            position: "absolute",
            right: 12,
            top: 222,
            color: "rgba(249, 24, 8, 0.8)",
          }}
        />
      ) : (
        <FavoriteBorderIcon
          fontSize="medium"
          sx={{
            position: "absolute",
            right: 12,
            top: 222,
            color: "rgba(249, 24, 8, 0.8)",
          }}
          onClick={() => {
            onCardSelect(movie);
            setFavourite(true);
          }}
        />
      )}
      <CardMenu>
        <MenuItem onClick={() => onCardSelect(movie)}>Select</MenuItem>
      </CardMenu>

      <CardMedia
        component="img"
        height="250"
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo>
        <Typography
          variant="subtitle1"
          gutterBottom
          style={{
            display: "flex",
            alignItems: "center",
            minHeight: 55,
            fontWeight: 700,
            lineHeight: 1.25,
          }}
          component="h2"
        >
          {movie.title}
        </Typography>

        <Typography mb={0} variant="subtitle2" gutterBottom component="h3">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
  }).isRequired,
  onCardSelect: PropTypes.func,
};
