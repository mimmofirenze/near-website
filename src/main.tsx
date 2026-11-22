
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { PrivacyPolicy, DeleteAccount } from "./NearLegalPages";
import "./index.css";

const path = window.location.pathname.replace(/\/+$/, "") || "/";

let page: React.ReactNode;

switch (path) {
  case "/privacy-policy":
    page = <PrivacyPolicy />;
    break;

  case "/delete-account":
    page = <DeleteAccount />;
    break;

  default:
    page = <App />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {page}
  </React.StrictMode>
);
