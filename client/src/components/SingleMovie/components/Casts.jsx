import * as React from "react";
import Box from "@mui/material/Box";
import { IMG_PATH } from "../../../config/constants";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Casts = ({ sortedCast }) => {
  return (
    <>
      {sortedCast?.map((person, index) => (
        <Card
          sx={{
            width: 200,
            margin: "9px",
          }}
          key={index}
        >
          <CardMedia
            component="img"
            height="260"
            image={`${IMG_PATH}${person.profile_path}`}
            alt={person.name}
          />
          <CardContent>
            <Button variant="outlined">
              <Link
                to={`/person/${person.id}`}
                style={{
                  color: "#00a4d0",
                  textDecoration: "none",
                }}
              >
                {person.name}
              </Link>
            </Button>
            <Typography variant="subtitle2" gutterBottom component="h3" mt={1}>
              Role: {person.character}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
