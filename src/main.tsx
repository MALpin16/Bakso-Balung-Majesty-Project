import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { trackPage } from "./utils/analytics";

// Track initial page view (SPA)
trackPage();
window.addEventListener("hashchange", () => trackPage());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
