import { Field } from "react-final-form";
import TextField from "@mui/material/TextField";
import { FormattedMessage } from "react-intl";

export const YearField = () => {
  return (
    <Field
      name="year"
      render={({ input }) => (
        <TextField
          id="outlined-number"
          label={<FormattedMessage id="year"></FormattedMessage>}
          type="number"
          minvalue={1800}
          maxvalue={2030}
          {...input}
        />
      )}
    />
  );
};
