import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { AppContextProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

// add search field
// add go to movie
// make full nfo on page movie
// section top popular on home
// add to watchlist?
// add slider on home?
// make this app pretty
