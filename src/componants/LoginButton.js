// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   return <button onClick={() => loginWithRedirect()}>Log In</button>;
// };

// export default LoginButton;


import React from "react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant="success" onClick={() => loginWithRedirect()}>Log In</Button>;
};

export default withAuth0(LoginButton);