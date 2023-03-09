import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const HeroImg = ({ NowPlayingImg }) => {
  const SearchBg = styled(Box)(() => ({
    height: "430px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundImage: `url(${NowPlayingImg?.image})`,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "flex-end",
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
        "linear-gradient(to right, rgba(31.5, 31.5, 31.5, .8) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.6) 30%, rgba(31.5, 31.5, 31.5, 0.4) 100%)",
    },
  }));

  return (
    <Container maxWidth="xl" disableGutters>
      <SearchBg>
        <Grid container spacing={2} sx={{ zIndex: 1, flexDirection: "column" }}>
          <Typography
            variant="h1"
            gutterBottom
            component="h1"
            color="secondary"
          >
            Welcome
          </Typography>

          <Typography
            variant="h2"
            gutterBottom
            component="h2"
            color="secondary"
            mb={4}
          >
            Millions of movies and people to discover <br /> Explore now
          </Typography>
        </Grid>
      </SearchBg>
    </Container>
  );
};
