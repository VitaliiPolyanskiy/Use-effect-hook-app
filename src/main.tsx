import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./styles/global.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// експортуємо root, щоб компонент Clock міг звернутися до нього
export { root };
