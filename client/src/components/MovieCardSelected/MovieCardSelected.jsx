import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { CardMenu } from "../CardMenu/CardMenu";
import { styled } from "@mui/material/styles";

export const MovieCardSelected = ({ movie, onCardDelete }) => {
  console.log(movie);

  const CardInfo = styled(CardContent)(({ theme }) => ({
    "&:last-child": {
      paddingBottom: theme.spacing(1),
    },
  }));
  return (
    <>
      <Card
        sx={{
          display: "flex",
          padding: "10px",
          textAlign: "left",
          position: "relative",
        }}
      >
        <CardMenu>
          <MenuItem onClick={() => onCardDelete(movie)}>
            <FormattedMessage id="delete" />
          </MenuItem>
        </CardMenu>
        <CardMedia
          component="img"
          sx={{ width: 120 }}
          image={movie.image}
          alt={movie.title}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardInfo sx={{ flex: "1 0 auto" }}>
            <Typography
              component="div"
              variant="subtitle1"
              style={{
                fontWeight: 700,
                lineHeight: 1.25,
              }}
            >
              {movie.title}
            </Typography>
            <Typography
              mt={1}
              variant="subtitle2"
              gutterBottom
              component="h3"
              color="info"
            >
              {movie.releaseDate}
            </Typography>
            <Typography mt={1} variant="caption" gutterBottom component="h3">
              {movie.overview}
            </Typography>
          </CardInfo>
        </Box>
      </Card>
    </>
  );
};

MovieCardSelected.propTypes = {
  movie: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
    runtime: PropTypes.number,
  }).isRequired,
  onCardDelete: PropTypes.func,
};
