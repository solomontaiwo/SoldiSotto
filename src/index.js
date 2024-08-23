import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./components/AuthProvider"; // Assicurati di importare AuthProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
