import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';
import './Header.css';
import Button from 'react-bootstrap/Button'
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button variant="outline-secondary" className='logIn' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>
  );
};

export default withAuth0(LogoutButton);