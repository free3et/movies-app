import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Settings } from "./pages/Settings/Settings";
import { Home } from "./pages/Home/Home";
import { Recomendations } from "./pages/Recomendations/Recomendations";
import { Layout } from "./Layout";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URL } from "./config/constants";

const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/recomendations",
        element: <Recomendations />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApolloProvider>
);

reportWebVitals();
