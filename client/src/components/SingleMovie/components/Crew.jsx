import * as React from "react";
import Box from "@mui/material/Box";
import { IMG_PATH } from "../../../config/constants";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { color, palette } from "@mui/system";
import { theme } from "../../../theme";
import { Button } from "@mui/material";

export const Crew = ({ sortedCrew }) => {
  return (
    <>
      {sortedCrew?.map((person, index) => (
        <>
          <List sx={{ width: "100%", maxWidth: 280, gap: 2 }} key={index}>
            <ListItem alignItems="center">
              <ListItemAvatar>
                <Avatar
                  alt={person.name}
                  sx={{ width: 50, height: 50, marginRight: "12px" }}
                  src={`${IMG_PATH}${person.profile_path}`}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Button color="success">
                    <Link
                      to={`/person/${person.id}`}
                      style={{ color: "#01b4e4", textDecoration: "none" }}
                    >
                      {person.name}
                    </Link>
                  </Button>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="secondary"
                    >
                      Department: {person.department}
                    </Typography>
                    <Divider
                      sx={{ margin: "6px 10px 6px 0", borderColor: "#ffffff" }}
                    />
                    <Typography
                      component="span"
                      variant="body2"
                      color="secondary"
                    >
                      Job: {person.job}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </List>
        </>
      ))}
    </>
  );
};
