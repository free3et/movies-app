import PropTypes from "prop-types";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
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
import LocationCityIcon from "@mui/icons-material/LocationCity";
import WcIcon from "@mui/icons-material/Wc";
import { Casts } from "../SingleMovie/components/Casts";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Crew } from "./components/Crew";
import { SocialSharing } from "../SocialSharing/SocialSharing";
import { Cast } from "./components/Cast";

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
    credits,
  } = itemPerson;

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

  function compare(a, b) {
    if (+a.popularity > +b.popularity) {
      return -1;
    }
    if (+a.popularity < +b.popularity) {
      return 1;
    }
    return 0;
  }

  const copyDataMovies = [...credits?.cast];

  const sortedMoviesCompare = copyDataMovies.sort(compare);

  const sortedMovies = sortedMoviesCompare?.filter(
    (item) => item.popularity > 12
  );

  const copyDataCrew = [...credits?.crew];
  const sortedCrewCompare = copyDataCrew.sort(compare);
  const sortedCrew = sortedCrewCompare?.filter((item) => item.popularity > 9);

  // Sort crew for departments
  const department = sortedCrew?.filter(
    (item) => item.department === "Directing"
  );
  const production = sortedCrew?.filter(
    (item) => item.department === "Production"
  );
  const writing = sortedCrew?.filter((item) => item.department === "Writing");
  const art = sortedCrew?.filter((item) => item.department === "Art");
  const editing = sortedCrew?.filter((item) => item.department === "Editing");
  const visualEffects = sortedCrew?.filter(
    (item) => item.department === "Visual Effects"
  );
  const creator = sortedCrew?.filter((item) => item.department === "Creator");

  const departmentArr = {
    department,
    production,
    writing,
    art,
    editing,
    visualEffects,
    creator,
  };

  return (
    <>
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

                <Typography mt={1} variant="h4" gutterBottom component="h3">
                  <CakeIcon
                    sx={{ fontSize: 22, position: "relative", top: 4 }}
                  />
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
                <SocialSharing url={window.location.href} title={name} />

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
              </Box>
            </Grid>
          </Grid>
        </PersonInfo>
      </Container>

      <Container maxWidth="xl">
        <Typography component="h4" variant="h4" align="center" m={3}>
          Acting
        </Typography>
        <Grid container justifyContent="center" mb={3}>
          <Cast sortedMovies={sortedMovies} />
        </Grid>
      </Container>
      <Crew departmentArr={departmentArr} />
    </>
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
