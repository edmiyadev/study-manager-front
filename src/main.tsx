import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StudyManager } from "./StudyManager";
import "./style.css";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <StudyManager />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
