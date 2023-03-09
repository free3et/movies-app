import { Field } from "react-final-form";
import TextField from "@mui/material/TextField";
import { FormattedMessage } from "react-intl";

export const ReleaseYearField = () => {
  return (
    <Field
      name="primaryReleaseYear"
      render={({ input }) => (
        <TextField
          id="outlined-number"
          label={<FormattedMessage id="release_year"></FormattedMessage>}
          type="number"
          minvalue={1887}
          maxvalue={2030}
          {...input}
        />
      )}
    />
  );
};
