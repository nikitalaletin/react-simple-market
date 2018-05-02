import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD_DpOtWwkftKzVaCx3VzRKJ3XyQSBF5gw",
    authDomain: "catch-of-the-day-85399.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-85399.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export {firebaseApp};

//default export
export default base;