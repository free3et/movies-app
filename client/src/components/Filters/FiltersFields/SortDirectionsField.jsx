import { Field } from "react-final-form";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { FormattedMessage } from "react-intl";
import { SORT_DIRECTION } from "../../../config/constants";

export const SortDirectionsField = () => {
  return (
    <Field
      name="sortDirection"
      render={({ input }) => (
        <FormattedMessage id="sort_direction">
          {(placeholder) => (
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <FormLabel id="sort_direction">{placeholder}</FormLabel>
              <RadioGroup row name="sort_direction" {...input}>
                <FormControlLabel
                  value={SORT_DIRECTION.ASC}
                  control={<Radio />}
                  label={<FormattedMessage id="asc"></FormattedMessage>}
                />
                <FormControlLabel
                  value={SORT_DIRECTION.DESC}
                  control={<Radio />}
                  label={<FormattedMessage id="desc"></FormattedMessage>}
                />
              </RadioGroup>
            </FormControl>
          )}
        </FormattedMessage>
      )}
    />
  );
};
