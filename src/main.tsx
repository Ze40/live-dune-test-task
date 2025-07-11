import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./style/base.scss";
import "./style/main.scss";
import "./style/templates.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
