import { useState, useContext, useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import Hidden from "@mui/material/Hidden";
import { Navigation } from "../Navigation/Navigation";
import { LOCALES } from "../../config/constants";
import { AppContext } from "../../context/index";
import Container from "@mui/material/Container";

export const Header = () => {
  const [isDrawerOpen, setDrawerOpened] = useState(false);

  const { state, dispatch } = useContext(AppContext);

  const setLanguage = useCallback((locale) => {
    dispatch({
      type: "setLocale",
      locale,
    });
  }, []);

  return (
    <Box
      sx={{
        background: "linear-gradient(to left, #344862, #203a43, #2c5364)",
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Hidden only={["lg", "xl"]}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setDrawerOpened(true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <Link to={"/"} component={RouterLink} sx={{ color: "white" }}>
                <FormattedMessage id="home" />
              </Link>
            </Typography>
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <Button
                component={RouterLink}
                to={"/recomendations"}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <FormattedMessage id="moviesRecomendations" />
              </Button>
            </Box>
            <Box>
              <Button
                variant="outlined"
                color="info"
                //disabled={state.locale === LOCALES.ENGLISH}
                sx={{ m: 1, color: "white" }}
                onClick={() => setLanguage(LOCALES.ENGLISH)}
              >
                English
              </Button>

              <Button
                variant="outlined"
                color="success"
                //disabled={state.locale === LOCALES.UKRANIAN}
                sx={{ m: 1, color: "white" }}
                onClick={() => setLanguage(LOCALES.UKRANIAN)}
              >
                Українська
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setDrawerOpened(false)}
        >
          {Navigation()}
        </Drawer>
      </Container>
    </Box>
  );
};
