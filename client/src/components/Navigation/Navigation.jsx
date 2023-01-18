import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import AddHomeIcon from "@mui/icons-material/AddHome";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export const Navigation = () => (
  <Box sx={{ display: { xs: "flex" } }} role="presentation">
    <List>
      <ListItem>
        <Link component={RouterLink} to={"/home"}>
          <ListItemButton>
            <ListItemIcon>
              <AddHomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Link component={RouterLink} to={"/recomendations"}>
          <ListItemButton>
            <ListItemIcon>
              <HeartBrokenIcon />
            </ListItemIcon>
            <ListItemText primary="Recomendations" />
          </ListItemButton>
        </Link>
        <Link component={RouterLink} to={"/settings"}>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </Link>
      </ListItem>
    </List>
  </Box>
);
