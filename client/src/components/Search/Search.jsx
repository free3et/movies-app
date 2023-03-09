import { Form, Field } from "react-final-form";
import { useQuery } from "@apollo/client";
import { SEARCH_QUERY } from "./queries";
import { FormattedMessage } from "react-intl";
import { Loader } from "../Loader/Loader";
import { SubmitBtn } from "../Filters/FiltersFields/SubmitBtn";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Grid } from "@mui/material";

export const Search = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: "630px",
              mt: "-40px",
              position: "relative",
            }}
          >
            <Field
              name="query"
              render={({ input, meta }) => (
                <>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Enter the search word"
                    inputProps={{ "aria-label": "enter search word" }}
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
              )}
            />
            <SubmitBtn />
          </Paper>
        </form>
      )}
    />
  );
};
