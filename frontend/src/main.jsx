import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="624016355262-v7ivtienecgrgtsn8dndcchv11qnmasm.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
