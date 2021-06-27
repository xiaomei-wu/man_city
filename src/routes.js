import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';

export const Routes = ({ user }) => {
  // show the dashboard if user
  return (
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        <Route path="/signin" exact component={SignIn} user={user} />
        <Route path="/" exact component={Home} user={user} />
      </Switch>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
};
