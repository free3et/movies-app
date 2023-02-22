import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#031d33",
    },
    secondary: {
      main: "#ffffff",
    },
    info: {
      main: "#01b4e4",
    },
    success: {
      main: "#1ed5a9",
    },
    warning: {
      main: "#ed9f35",
    },
    error: {
      main: "#d93b3b",
    },
    text: {
      hint: "rgba(0,0,0,0.5)",
    },
  },
  typography: {
    fontSize: "1.5em",
    htmlFontSize: "1.5em",
    fontFamily: "Source Sans Pro",
    h1: {
      fontSize: "2.5em",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2em",
      fontWeight: 700,
      lineHeight: 1.41,
    },
    h3: {
      fontSize: "1.2em",
      fontWeight: 500,
      lineHeight: 2.5,
      fontStyle: "italic",
    },
    h4: {
      fontSize: "1.15em",
      fontWeight: 500,
      lineHeight: 1.25,
      marginBottom: 1,
    },
    subtitle1: {
      fontSize: "1.2em",
      lineHeight: 1.3,
    },
    subtitle2: {
      fontSize: "1em",
    },
    body1: {
      fontSize: "1.1em",
    },
    caption: {
      fontSize: "1em",
      fontWeight: 700,
    },
    button: {
      fontSize: "1em",
    },
  },
  shape: {
    borderRadius: 8,
  },
});
