import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { persistor, store } from "../src/store/store.ts";
import { PersistGate } from "redux-persist/es/integration/react";

async function apiC() {
  const data = await fetch("https://api.escuelajs.co/api/v1/categories");
  const resp = await data.json();
  return resp;
}
const respo = await apiC();
console.log(respo);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
