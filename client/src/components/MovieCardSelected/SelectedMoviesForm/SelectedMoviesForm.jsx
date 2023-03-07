import { Form, Field } from "react-final-form";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";

export const SelectedMoviesForm = ({ onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if (!values.listName) {
          errors.listName = "Required";
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Paper sx={{ display: "flex", alignItems: "center" }}>
            <Field
              name="listName"
              render={({ input, meta }) => (
                <>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Put the list name"
                    inputProps={{ "aria-label": "put list name" }}
                    {...input}
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </>
              )}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton
              type="submit"
              color="primary"
              sx={{ m: "4px" }}
              aria-label="directions"
            >
              <CheckIcon sx={{ fontSize: "1.5rem" }} />
            </IconButton>
          </Paper>
        </form>
      )}
    />
  );
};
