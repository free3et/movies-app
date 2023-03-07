import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import { Button, CardContent } from "@mui/material";

export const Cast = ({ sortedMovies }) => {
  return (
    <>
      {sortedMovies?.map((cast, index) => {
        return (
          <Card
            key={index}
            sx={{
              width: 290,
              margin: "7px",
              //backgroundColor: "rgba(3, 29, 51, .6)",
            }}
          >
            <CardContent>
              <Button color="success" variant="outlined">
                <Link
                  to={`/movie/${cast.id}`}
                  style={{
                    color: "#031d33",
                    textDecoration: "none",
                  }}
                >
                  {cast.title}
                </Link>
              </Button>
              <Divider
                sx={{
                  margin: "16px 10px 16px 0",
                }}
              />
              <Typography variant="subtitle2" gutterBottom component="h3">
                Role: {cast.character}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
