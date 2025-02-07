import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StudyManager } from "./StudyManager";
import "./style.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <StudyManager />
    </BrowserRouter>
  </StrictMode>
);
