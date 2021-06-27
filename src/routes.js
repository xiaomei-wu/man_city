import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthGuard } from './HOC/Auth';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';
import { Dashboard } from './components/Admin/Dashboard';

export const Routes = ({ user }) => {
  // show the dashboard if user
  return (
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        {/*  Protect /dashboad route using Hoc */}
        <Route path="/dashboard" exact component={AuthGuard(Dashboard)} />
        {/*  If the user already signed in, kick the user out of this page */}
        {/*  The default way of passing a component will pass all the route props as well, we are now calling a function that returns a component and overwrite the props */}
        <Route
          path="/signin"
          exact
          component={props => <SignIn {...props} user={user} />}
        />
        {/*  This way of passing the user will not work */}
        <Route path="/" exact component={Home} user={user} />
      </Switch>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
};
