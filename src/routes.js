import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { SignIn } from './components/SignIn';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/signin" exact component={SignIn} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
