import { createTheme } from "@mui/material/styles";
import { lightBlue } from "@mui/material/colors";

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
    action: {
      active: lightBlue[200],
      activeOpacity: 1,
      hover: lightBlue[100],
      hoverOpacity: 0.7,
      focus: lightBlue[600],
      focusOpacity: 1,
      selected: lightBlue[300],
      selectedOpacity: 1,
    },
  },
  typography: {
    fontSize: 1.75,
    htmlFontSize: 1.5,
    fontFamily: "Source Sans Pro",
    h1: {
      fontSize: "2.5em",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: "2em",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h3: {
      fontSize: "1.3em",
      fontWeight: 500,
      lineHeight: 2.5,
      fontStyle: "italic",
    },
    h4: {
      fontSize: "1.25em",
      fontWeight: 700,
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
      fontSize: "0.9em",
      fontWeight: 600,
      lineHeight: 1.3,
    },
    button: {
      fontSize: "0.8em",
      fontWeight: 600,
    },
    a: {
      color: "#1ed5a9",
      textDecoration: "none",
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#ed9f35",
            "&:hover": { background: "#1ed5a9" },
            "&.Mui-focusVisible": { background: "#ed9f35" },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
});
