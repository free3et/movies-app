import { Fragment } from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";
import { LOCALES } from "../config/constants";
import messages from "../translations";

export const I18nProvider = ({ children, locale = LOCALES.ENGLISH }) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

I18nProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  locale: PropTypes.oneOf(Object.values(LOCALES)),
};

I18nProvider.defaultProps = {
  locale: LOCALES.ENGLISH,
};
