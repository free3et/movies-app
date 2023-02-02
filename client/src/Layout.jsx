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
import { Settings } from "./pages/Settings/Settings";
import { Recomendations } from "./pages/Recomendations/Recomendations";

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
        <CssBaseline />
        <Header />

        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
          }}
        >
          <Container maxWidth="xl">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/recomendations" element={<Recomendations />} />
            </Routes>
          </Container>
        </Box>
      </ApolloProvider>
    </I18nProvider>
  );
}

export default Layout;
