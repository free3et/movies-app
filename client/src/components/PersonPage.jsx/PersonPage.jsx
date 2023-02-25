import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { CardMenu } from "../CardMenu/CardMenu";
import { useParams } from "react-router-dom";
import { PERSON_BY_ID } from "../PersonPage.jsx/queries";
import { useQuery } from "@apollo/client";
import { IMG_PATH, IMG_FULL_SIZE } from "../../config/constants";
import CakeIcon from "@mui/icons-material/Cake";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TodayIcon from "@mui/icons-material/Today";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WcIcon from "@mui/icons-material/Wc";

export const PersonPage = () => {
  const params = useParams();

  const id = +params.id;

  const {
    loading: loading,
    error: error,
    data: personData,
  } = useQuery(PERSON_BY_ID, {
    variables: { id },
  });

  const itemPerson = personData?.getPerson;

  if (!itemPerson) return;

  const {
    biography,
    birthday,
    deathday,
    gender,
    homepage,
    name,
    placeOfBirth,
    profilePath,
  } = itemPerson;
  console.log(personData?.getPerson);

  const PersonInfo = styled(Box)(() => ({
    height: "500",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left calc((50vw - 170px) - 340px) top",
    backgroundImage: `url(${IMG_FULL_SIZE}${profilePath})`,
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

  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  function replaceWithBr() {
    return biography.replace(/\n/g, "<br />");
  }

  return (
    <Container maxWidth="xl" disableGutters>
      <PersonInfo>
        <Grid container spacing={2} sx={{ zIndex: 1, color: "white" }}>
          <Grid item xs={3}>
            <CardMedia
              component="img"
              height="450"
              width="auto"
              image={`${IMG_PATH}/${profilePath}`}
              alt={name}
              sx={{ borderRadius: "5px", objectFit: "contain" }}
            />
          </Grid>
          <Grid item xs={9}>
            <Box ml={3}>
              <Typography variant="h2" gutterBottom component="h2">
                {name}
              </Typography>

              <Typography mb={2} variant="h4" gutterBottom component="h3">
                <CakeIcon sx={{ fontSize: 22, position: "relative", top: 4 }} />
                &nbsp;
                {birthday} ({getAge(birthday)} years) &nbsp;&#8226;&nbsp;
                {deathday && { deathday }}
                <LocationCityIcon
                  sx={{ fontSize: 22, position: "relative", top: 3 }}
                />
                &nbsp;Place of Birth: {placeOfBirth}
                &nbsp;&#8226;&nbsp;
                <WcIcon sx={{ fontSize: 22, position: "relative", top: 4 }} />
                &nbsp;
                {gender === 1 ? "Female" : "Man"}
              </Typography>

              {homepage && (
                <Button href={homepage} variant="outlined" color="success">
                  Home page
                </Button>
              )}
              <Typography mt={1} variant="h3" gutterBottom component="h3">
                Biography:
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="h3"
                dangerouslySetInnerHTML={{ __html: replaceWithBr() }}
              ></Typography>

              {/*  <TableAverageBudget /> */}
            </Box>
          </Grid>
        </Grid>
      </PersonInfo>
    </Container>
  );
};

{
  /*    <Card sx={{ maxWidth: 250, position: "relative" }}>
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
          {movie.voteAverage}
        </Typography>
        <Typography mb={0} variant="subtitle2" gutterBottom component="h3">
          {movie.releaseDate}
        </Typography>
      </CardInfo>
      <Link to={`/movie/${movie.id}`}>Info</Link>
    </Card> */
}

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
