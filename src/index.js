import React from "react";
import ReactDom from "react-dom/client";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { EmailContextProvider } from "./contexts/EmailContextProvider";
import { MemIdContextProvider } from "./contexts/MemIdContextProvider";
import { BirthContextProvider } from "./contexts/BirthProvider";
ReactDom.createRoot(document.querySelector("#root")).render(
  <ContextProvider>
    <EmailContextProvider>
      <MemIdContextProvider>
        <App />
      </MemIdContextProvider>
    </EmailContextProvider>
  </ContextProvider>
);
