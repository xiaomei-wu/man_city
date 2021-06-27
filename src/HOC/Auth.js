import React from 'react';
import { Redirect } from 'react-router-dom';
import { firebase } from '../firebase';

export const AuthGuard = Component => {
  class AuthHoc extends React.Component {
    authCheck = () => {
      const user = firebase.auth().currentUser;
      if (user) {
        // Why we are using class component here
        // Receive all the props from the react route
        return <Component {...this.props} />;
      }
      return <Redirect to="/" />;
    };

    render() {
      return this.authCheck();
    }
  }
  return AuthHoc;
};
