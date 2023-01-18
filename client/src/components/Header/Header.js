import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { Navigation } from "../Navigation/Navigation";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { grey } from "@mui/material/colors";

import Hidden from "@mui/material/Hidden";

export const Header = () => {
  const [isDrawerOpen, setDrawerOpened] = useState(false);
  const greyColor = grey[800];
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
              Movies
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Button
              component={RouterLink}
              to={"/recomendations"}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Recomendations
            </Button>

            <Button
              component={RouterLink}
              to={"/settings"}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Settings
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
