import { Field } from "react-final-form";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { FormattedMessage } from "react-intl";
import { SORT_OPTIONS } from "../../../config/constants";

export const SortByField = () => {
  return (
    <Field
      name="sortBy"
      render={({ input }) => (
        <FormattedMessage id="sort_by">
          {(placeholder) => (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">
                {placeholder}
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                autoWidth
                label={placeholder}
                {...input}
              >
                {SORT_OPTIONS.map(({ label, value }) => (
                  <MenuItem key={value} value={value}>
                    <FormattedMessage id={`${label}`}></FormattedMessage>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </FormattedMessage>
      )}
    />
  );
};
