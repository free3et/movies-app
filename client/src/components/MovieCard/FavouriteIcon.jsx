import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const FavouriteIcon = ({ onCardSelect, deleteMovie, movie }) => {
  const [favourite, setFavourite] = useState("");
  return (
    <>
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
    </>
  );
};
