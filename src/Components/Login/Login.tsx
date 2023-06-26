import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const handleSuccess = (response: any) => {
    console.log("Google login success:", response);
    // Handle the successful authentication response here
  };

  const handleFailure = (error: any) => {
    console.error("Google login error:", error);
    // Handle the login error here
  };

  return (
    <GoogleOAuthProvider clientId={'74023488618-a1b8ha1j0faq61ac77ablflb8sg94tno.apps.googleusercontent.com'}>
      <div>
        <h1>Welcome to My App</h1>
        {/* <GoogleLogin
          onSuccess={handleSuccess}
          onError={(error: any) => handleFailure(error)}
          promptMomentNotification={() => {}}
        /> */}
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
