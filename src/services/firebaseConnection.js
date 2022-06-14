import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
  apiKey: 'AIzaSyBcOW7s51036ETkIlCMmg66ecicoHYnTNQ',
  authDomain: 'pokeapp-f0f74.firebaseapp.com',
  projectId: 'pokeapp-f0f74',
  storageBucket: 'pokeapp-f0f74.appspot.com',
  messagingSenderId: '227181977388',
  appId: '1:227181977388:web:6ad8fa66f31557c0c39689',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
