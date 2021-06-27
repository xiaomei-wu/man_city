import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { CityLogo } from '../utils/tools';
import { firebase } from '../../firebase';

export const Header = ({ user }) => {
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('signed out');
      })
      .catch(error => {
        alert('error log out');
      });
  };
  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: '#98c5e9',
        boxShadow: 'none',
        padding: '10px 0',
        borderBottom: '2px solid #00285e',
      }}
    >
      <Toolbar style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div className="header_logo">
            <CityLogo link linkTo="/" width="70px" height="70px" />
          </div>
        </div>

        <Link to="/the_team">
          <Button color="inherit">The Team</Button>
        </Link>

        <Link to="/the_matches">
          <Button color="inherit">Matches</Button>
        </Link>
        {user ? (
          <>
            <Link to="/dashboard">
              <Button color="inherit">Dashboard</Button>
            </Link>
            <Button color="inherit" onClick={() => handleLogout()}>
              Log out
            </Button>
          </>
        ) : (
          <Link to="/signin">
            <Button color="inherit">Sign in</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
};
