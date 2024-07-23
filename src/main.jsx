/* Author: Sotiris Konstantis */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SeasonProvider } from "./contexts/seasonContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SeasonProvider>
    <App />
  </SeasonProvider>
);
