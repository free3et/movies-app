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

// footer
// loading and errors
// default picture
// to top btn
// translations
// section top popular on home
// add to watchlist?
// make this app pretty
