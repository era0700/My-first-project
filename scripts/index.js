import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDDITP852vTbvXIhw8qCnsDoRBVdXQ9S1E",
    authDomain: "uniqueorns-cffea.firebaseapp.com",
    projectId: "uniqueorns-cffea",
    storageBucket: "uniqueorns-cffea.appspot.com",
    messagingSenderId: "674836566075",
    appId: "1:674836566075:web:eba3ecd8d64e72444fcc1e",
    measurementId: "G-F2KCVW5GVP"
  };

  firebase.initializeApp(firebaseConfig);