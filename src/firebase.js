import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp( {
    apiKey: "AIzaSyD5bBdyTDSgIhUBoyzOH_YPVpXaX9FcRCc",
    authDomain: "instagram-clone-itsayush.firebaseapp.com",
    databaseURL: "https://instagram-clone-itsayush-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-itsayush",
    storageBucket: "instagram-clone-itsayush.appspot.com",
    messagingSenderId: "389952592251",
    appId: "1:389952592251:web:b56c5a39e7dfbb635405de",
    measurementId: "G-EBZT01EHK0"
} );

const db = getFirestore();
const auth = getAuth();
// const storage = storage();

export { db, auth };