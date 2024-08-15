/* Author: Sotiris Konstantis */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SeasonProvider } from "./contexts/SeasonContext.jsx";
import { SessionStorageProvider } from "./contexts/SessionStorageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SessionStorageProvider>
    <SeasonProvider>
      <App />
    </SeasonProvider>
  </SessionStorageProvider>
);
