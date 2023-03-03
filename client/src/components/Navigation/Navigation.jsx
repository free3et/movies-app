import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import AddHomeIcon from "@mui/icons-material/AddHome";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import Link from "@mui/material/Link";
import { translate } from "../../utils/translate";

export const Navigation = () => {
  return (
    <Box sx={{ display: { xs: "flex" } }} role="presentation">
      <List>
        <ListItem>
          <Link component={RouterLink} to={"/home"}>
            <ListItemButton>
              <ListItemIcon>
                <AddHomeIcon />
              </ListItemIcon>
              <ListItemText primary={translate("home")} />
            </ListItemButton>
          </Link>
          <Link component={RouterLink} to={"/recomendations"}>
            <ListItemButton>
              <ListItemIcon>
                <HeartBrokenIcon />
              </ListItemIcon>
              <ListItemText primary={translate("moviesRecomendations")} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
