import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Card from "@mui/material/Card";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { color, palette } from "@mui/system";
import { theme } from "../../../theme";
import { Button, CardContent, Paper } from "@mui/material";

export const Crew = ({ departmentArr }) => {
  const a = Object.values(departmentArr).filter((el) => el.length > 0);

  const {
    department,
    production,
    writing,
    art,
    editing,
    visualEffects,
    creator,
  } = departmentArr;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {a.map((el) => (
        <>
          <Container
            maxWidth="xl"
            disableGutters
            sx={{
              background:
                "linear-gradient(to right, rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 52.5, 0.84) 60%, rgba(31.5, 31.5, 52.5, 0.84) 100%)",
              padding: "20px 0",
            }}
          >
            <Typography
              component="h4"
              variant="h4"
              align="center"
              color="secondary"
              m={3}
            >
              {el[0].department}
            </Typography>
            <Grid container justifyContent="center">
              {el.map((person) => (
                <Card sx={{ width: 300, position: "relative", margin: "7px" }}>
                  <List
                    sx={{ width: "100%", maxWidth: 250 }}
                    key={person.id + person.title}
                  >
                    <ListItem alignItems="center">
                      <ListItemText
                        primary={
                          <Button variant="outlined">
                            <Link
                              to={`/movie/${person.id}`}
                              style={{
                                color: "#01b4e4",
                                textDecoration: "none",
                              }}
                            >
                              {person.title}
                            </Link>
                          </Button>
                        }
                        secondary={
                          <>
                            <Divider
                              sx={{
                                margin: "6px 10px 6px 0",
                              }}
                            />
                            <Typography component="span" variant="body2">
                              Job: {person.job}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </Card>
              ))}
            </Grid>
          </Container>
        </>
      ))}
      {/*   {production.length > 0 &&
        production.map((person) => (
          <>
            <List
              sx={{ width: "100%", maxWidth: 280, gap: 2 }}
              key={person.id + person.title}
            >
              <ListItem alignItems="center">
                <ListItemText
                  primary={
                    <Button color="success">
                      <Link
                        to={`/movie/${person.id}`}
                        style={{ color: "#01b4e4", textDecoration: "none" }}
                      >
                        {person.title}
                      </Link>
                    </Button>
                  }
                  secondary={
                    <>
                      <Typography component="span" variant="body2">
                        Department: {person.department}
                      </Typography>
                      <Divider
                        sx={{
                          margin: "6px 10px 6px 0",
                        }}
                      />
                      <Typography component="span" variant="body2">
                        Job: {person.job}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </List>
          </>
        ))} */}
    </>
  );
};
