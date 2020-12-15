import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAaTZWWMOPETOpP7aGsnKltiel6PfZNpfY",
    authDomain: "uocify-d08c2.firebaseapp.com",
    databaseURL: "https://uocify-d08c2.firebaseio.com",
    projectId: "uocify-d08c2",
    storageBucket: "uocify-d08c2.appspot.com",
    messagingSenderId: "685303070109",
    appId: "1:685303070109:web:f2863354ba08d2db258374"
  };
  
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();