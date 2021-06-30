import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// import { cityDb } from './temp/m-city-export';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCe3by77k5RkvQ2ZMNtzoIpIvDc7guHx6I',
  authDomain: 'mcity-c36b1.firebaseapp.com',
  projectId: 'mcity-c36b1',
  storageBucket: 'mcity-c36b1.appspot.com',
  messagingSenderId: '172995098269',
  appId: '1:172995098269:web:ebde3bbd3c2b7ecf980674',
  measurementId: 'G-R5G4DB8X0K',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const DB = firebase.firestore();
// const matchesCollection = DB.collection('matches');
// const playersCollection = DB.collection('players');
// const positionsCollection = DB.collection('positions');
// const promotionsCollection = DB.collection('promotions');
// const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item);
// });
//
// cityDb.players.forEach(item => {
//   playersCollection.add(item);
// });
//
// cityDb.positions.forEach(item => {
//   positionsCollection.add(item);
// });
//
// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item);
// });
//
// cityDb.teams.forEach(item => {
//   teamsCollection.add(item);
// });

export {
  firebase,
  // matchesCollection,
  // playersCollection,
  // positionsCollection,
  // promotionsCollection,
  // teamsCollection,
};
