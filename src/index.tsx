import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/contextProvider";
import { BrowserRouter as Browser } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Browser>
        <App />
      </Browser>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
