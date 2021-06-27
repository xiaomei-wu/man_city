import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/app.css';

import { Routes } from './routes';
import { firebase } from './firebase';

const App = ({ user }) => {
  return <Routes user={user} />;
};

// firebase onAuthStateChanged will detect the logged in user and pass it to App,App pass it to Routes
firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(<App user={user} />, document.querySelector('#root'));
});
