import * as firebase from 'firebase/app';
import * as App from 'firebase/database';

let Config = {
  apiKey: 'AIzaSyDbYxz-n7DNVqBhGm7IVZQRN_4feh0djD4',
  authDomain: 'react-auth-e2de7.firebaseapp.com',
  databaseURL: 'https://react-auth-e2de7-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'react-auth-e2de7',
  storageBucket: 'react-auth-e2de7.appspot.com',
  messagingSenderId: '756749562426',
  appId: '1:756749562426:web:839449c6e7cd09564bbb03',
  measurementId: 'G-6ZP6WGTKCL',
};

firebase.initializeApp(Config);

export default App;
