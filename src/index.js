import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDom.createRoot(document.querySelector("#root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
