import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router";
import { base_url } from "./app/lg.ts";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={base_url}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
