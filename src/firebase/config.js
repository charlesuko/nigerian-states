
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDgSWTRp7GbrVYhz5orK6SkbvZ19pvRCAo",
    authDomain: "nigerian-states.firebaseapp.com",
    databaseURL: "https://nigerian-states.firebaseio.com",
    projectId: "nigerian-states",
    storageBucket: "nigerian-states.appspot.com",
    messagingSenderId: "721501732156",
    appId: "1:721501732156:web:ddccb293618ac535377239",
    measurementId: "G-QHJ6FL8YD5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectFirestore, projectStorage, timestamp};