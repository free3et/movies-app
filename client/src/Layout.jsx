import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  from,
} from "@apollo/client";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { BASE_URL } from "./config/constants";
import { AppContext } from "./context/index";
import { I18nProvider } from "./context/languageContext";
import { Header } from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import { Recomendations } from "./pages/Recomendations/Recomendations";
import { SingleMovie } from "./components/SingleMovie/SingleMovie";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { theme } from "./theme";
import { PersonPage } from "./components/PersonPage.jsx/PersonPage";

function Layout() {
  const { state } = useContext(AppContext);
  const httpLink = new HttpLink({ uri: BASE_URL });
  const localeMiddleware = new ApolloLink((operation, forward) => {
    const customHeaders = operation.getContext().hasOwnProperty("headers")
      ? operation.getContext().headers
      : {};

    operation.setContext({
      headers: {
        ...customHeaders,
        locale: state.locale,
      },
    });
    return forward(operation);
  });

  const client = new ApolloClient({
    link: from([localeMiddleware, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <I18nProvider locale={state.locale}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />

          <Box
            sx={{
              flexGrow: 1,
              background: "linear-gradient(to left, #344862, #203a43, #2c5364)",
            }}
          >
            <Container maxWidth="xl" disableGutters>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recomendations" element={<Recomendations />} />
                <Route path="/movie/:id" element={<SingleMovie />} />
                <Route path="/person/:id" element={<PersonPage />} />
              </Routes>
            </Container>
          </Box>
        </ThemeProvider>
      </ApolloProvider>
    </I18nProvider>
  );
}

export default Layout;
