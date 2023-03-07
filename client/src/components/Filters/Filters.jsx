import { Form, Field } from "react-final-form";
import Box from "@mui/material/Box";
import { useQuery } from "@apollo/client";
import { GENRES_QUERY } from "./queries";

import { FormattedMessage } from "react-intl";
import { GenreField } from "./FiltersFields/GenreField";
import { AdultField } from "./FiltersFields/AdultField";
import { SubmitBtn } from "./FiltersFields/SubmitBtn";
import { SortByField } from "./FiltersFields/SortByField";
import { ReleaseYearField } from "./FiltersFields/ReleaseYearField";
import { SortDirectionsField } from "./FiltersFields/SortDirectionsField";
import { Loader } from "../Loader/Loader";

export const Filters = ({ onSubmit, initialValues }) => {
  const { loading, error, data } = useQuery(GENRES_QUERY);

  if (loading) return <Loader />;

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                padding: "0 20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box mr={3}>
                  <GenreField data={data} />
                </Box>

                <Box mr={3}>
                  <ReleaseYearField />
                </Box>
                <Box mr={3}>
                  <SortByField />
                </Box>
                <Box mr={3}>
                  <SortDirectionsField />
                </Box>
                <Box mr={3}>
                  <AdultField />
                </Box>
                <Box mr={3}>
                  <SubmitBtn />
                </Box>
              </Box>
            </Box>
          </form>
        )}
      />
    </div>
  );
};
