import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

console.log(clientId, 'client id')
if (!clientId) {
    throw new Error("GOOGLE_CLIENT_ID must be defined");
  }

const Login: React.FC = () => {
  const onSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('profileObj' in res) {
      console.log('Login Success:', res.profileObj);
      // you can send the res.tokenObj.id_token to your backend for verification
    }
  };

  const onFailure = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log('Login failed: res:', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Login;
