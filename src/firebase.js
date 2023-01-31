import firebase from "firebase/app";
import "firebase/firebase-messaging";

var firebaseConfig = {
  apiKey: "AIzaSyCeuw-4YqZgQ-MryU1nKFClIHWOoDnZZNE",
  authDomain: "push-notification-9e279.firebaseapp.com",
  projectId: "push-notification-9e279",
  storageBucket: "push-notification-9e279.appspot.com",
  messagingSenderId: "401149055712",
  appId: "1:401149055712:web:623ddb4cd7f52f3c11b685",
  measurementId: "G-S91CTD32W8",
};

firebase.initializeApp(firebaseConfig);

export default firebase.messaging();
