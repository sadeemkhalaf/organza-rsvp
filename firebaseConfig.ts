// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { collection, getFirestore } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmOrSiKQl0Hqf0QT0IO49GQaD-E8n7wWk',
  authDomain: 'organza-rsvp.firebaseapp.com',
  projectId: 'organza-rsvp',
  storageBucket: 'organza-rsvp.firebasestorage.app',
  messagingSenderId: '15793800560',
  appId: '1:15793800560:web:634875ad42df28618cbbb5',
  measurementId: 'G-WD39PEG3NZ',
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const auth = getAuth(fbApp);
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const db = getFirestore(firebaseApp);
const guestCollection = collection(db, 'guests');
const eventDetails = collection(db, 'events');
const users = collection(db, 'users');
// const analytics = getAnalytics(app);

export { fbApp, auth, db, guestCollection, users, eventDetails };
