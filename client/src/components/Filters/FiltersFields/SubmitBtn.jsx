import { Field } from "react-final-form";

import { FormattedMessage } from "react-intl";
import Button from "@mui/material/Button";

export const SubmitBtn = () => {
  return (
    <Button type="submit" variant="contained" color="success" size="small">
      <FormattedMessage id="submit" />
    </Button>
  );
};
