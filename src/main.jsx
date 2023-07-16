import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-62w7jr5gmpyg4sqp.us.auth0.com"
    clientId="9RiQH7Ps6IY2TmTRxFTFCQtUhPToCZtZ"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider>
      <App />
    </AppProvider>
  </Auth0Provider>


);
