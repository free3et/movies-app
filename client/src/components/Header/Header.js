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
    <Box sx={{ flexGrow: 1 }}>
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={"/home"} component={RouterLink} sx={{ color: "white" }}>
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

            <Button
              component={RouterLink}
              to={"/settings"}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <FormattedMessage id="settings" />
            </Button>
          </Box>
          <Box>
            <Button
              disabled={state.locale === LOCALES.ENGLISH}
              sx={{ my: 2, color: "white" }}
              onClick={() => setLanguage(LOCALES.ENGLISH)}
            >
              English
            </Button>

            <Button
              disabled={state.locale === LOCALES.UKRANIAN}
              sx={{ my: 2, color: "white" }}
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
    </Box>
  );
};
