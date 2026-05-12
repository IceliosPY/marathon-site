import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./styles/index.css"; // ✅ ici
import { initCursor } from "./shared/cursor";

initCursor();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);