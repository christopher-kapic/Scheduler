import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDiEfqwauQoHzrgUnFBiKqEjemlpZ86UGk",
    authDomain: "scheduler-6b1a2.firebaseapp.com",
    databaseURL: "https://scheduler-6b1a2-default-rtdb.firebaseio.com",
    projectId: "scheduler-6b1a2",
    storageBucket: "scheduler-6b1a2.appspot.com",
    messagingSenderId: "188961208090",
    appId: "1:188961208090:web:f801b46b50aa2049801ea3"
  };

firebase.initializeApp(firebaseConfig);

export { firebase };