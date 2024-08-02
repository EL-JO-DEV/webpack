import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
let root = document.querySelector("#root");
if (root) {
  ReactDOM.createRoot(root).render(<App />);
}
