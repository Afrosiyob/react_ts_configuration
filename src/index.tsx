/* eslint-disable import/extensions */

import "./i18n";

import React from "react";
import { RootProvider } from "providers";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./core/mocks/browser");

  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RootProvider />
  </React.StrictMode>
);

reportWebVitals();
