import { Field } from "react-final-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormattedMessage } from "react-intl";
import Checkbox from "@mui/material/Checkbox";

export const AdultField = () => {
  return (
    <Field
      name="includeAdult"
      type="checkbox"
      render={({ input }) => (
        <FormControlLabel
          control={<Checkbox {...input} />}
          label={<FormattedMessage id="include_adult"></FormattedMessage>}
        />
      )}
    />
  );
};
