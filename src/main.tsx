import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./assets/styles/index.css";
import { GlobalContextProvider } from "./contexts/GlobalContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>
);
