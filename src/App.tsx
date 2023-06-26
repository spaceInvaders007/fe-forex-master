import React, { FunctionComponent } from "react";
import Login from "./Components/Login/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App: FunctionComponent = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId="74023488618-a1b8ha1j0faq61ac77ablflb8sg94tno.apps.googleusercontent.com">
        <h1>Forex App</h1>
        <Login />
      </GoogleOAuthProvider>
    </div>
  );
};

export default App;
