import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { initialState, reducer } from "./Utility/reducer.js";
import { DataProvider } from "./DataProvider/DataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </StrictMode>,
);
