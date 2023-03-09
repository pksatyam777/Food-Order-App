import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6lEMBuTS6246WW5zpqVI8Q34gWpce4Nc",
    authDomain: "foodvilla-4c9eb.firebaseapp.com",
    projectId: "foodvilla-4c9eb",
    storageBucket: "foodvilla-4c9eb.appspot.com",
    messagingSenderId: "667172268315",
    appId: "1:667172268315:web:9457c5498c8088e7308bbe",
    measurementId: "G-S2DX7P5DQL"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;