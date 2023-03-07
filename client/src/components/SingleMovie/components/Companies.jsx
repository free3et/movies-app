import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IMG_PATH_200 } from "../../../config/constants";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export const Companies = ({ production_companies }) => {
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="h4"
        color="primary"
        align="center"
        mt={2}
      >
        Production Companies
      </Typography>

      <ImageList
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          maxHeight: "230px",
          overflow: "hidden",
        }}
        gap={10}
      >
        {production_companies?.map((company) => (
          <ImageListItem
            key={company.name}
            sx={{
              border: "1px solid #ddd",
              maxWidth: "250px",
              m: 1,
              /* boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)", */
            }}
          >
            <img
              style={{ objectFit: "contain", padding: "5px" }}
              src={`${IMG_PATH_200}${company.logo_path}`}
              /*      srcSet={`${IMG_PATH}${company.logo_path}?w=248&fit=crop&auto=format&dpr=2 2x`} */
              alt={company.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={`${company.name} (${company.origin_country})`}
              position="top"
              sx={{ position: "relative" }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};
