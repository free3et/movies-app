import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IMG_PATH } from "../../../config/constants";
import Typography from "@mui/material/Typography";

export const Companies = ({ production_companies }) => {
  return (
    <List>
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
      {production_companies?.map((company, index) => (
        <>
          <ListItem
            sx={{
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            {company.logo_path && (
              <img
                src={`${IMG_PATH}${company.logo_path}`}
                style={{
                  height: "70px",
                  width: "200px",
                  objectFit: "contain",
                  padding: "5px",
                }}
              />
            )}

            <ListItemText
              secondary={`${company.name} (${company.origin_country})`}
            />
          </ListItem>
        </>
      ))}
    </List>
  );
};
