import firebase from 'firebase';

export const firebaseConfig = {
    apiKey: "AIzaSyCAizyqVKLJrURe9K6YoP5NlcTaw6DiM00",
    authDomain: "donateplasma-7f1e0.firebaseapp.com",
    databaseURL: "https://donateplasma-7f1e0.firebaseio.com",
    projectId: "donateplasma-7f1e0",
    storageBucket: "donateplasma-7f1e0.appspot.com",
    messagingSenderId: "1039128406888",
    appId: "1:1039128406888:web:388d67f02a5e976893c4dd",
    measurementId: "G-QQBZPSPRQ9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;