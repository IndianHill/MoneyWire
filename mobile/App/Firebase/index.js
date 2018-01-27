import * as firebase from 'firebase';

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDhrAm8bI3Eg2g1IzYMDFQAmZfb12RzxtQ",
  authDomain: "app-moneywire.firebaseapp.com",
  databaseURL: "https://app-moneywire.firebaseio.com",
  projectId: "app-moneywire",
  storageBucket: "",
  messagingSenderId: "84141118544"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);