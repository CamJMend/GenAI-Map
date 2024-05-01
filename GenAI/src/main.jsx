import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { GlobalProvider } from "./GlobalContext/GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <React.StrictMode>
      <Auth0Provider 
        domain="dev-uqqb6a6pooddfmky.us.auth0.com" 
        clientId="EEuSn2TUgboxjIMD4WWJrOvriYy2ijlp" 
        redirectUri="http://localhost:5173/admin" >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </GlobalProvider>
);
