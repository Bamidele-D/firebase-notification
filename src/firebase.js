import firebase from "firebase/app";
import "firebase/firebase-messaging";


export default async function firebaseInitialize (){
var firebaseConfig = {
  apiKey: "AIzaSyCeuw-4YqZgQ-MryU1nKFClIHWOoDnZZNE",
  authDomain: "push-notification-9e279.firebaseapp.com",
  projectId: "push-notification-9e279",
  storageBucket: "push-notification-9e279.appspot.com",
  messagingSenderId: "401149055712",
  appId: "1:401149055712:web:623ddb4cd7f52f3c11b685",
  measurementId: "G-S91CTD32W8",
};

firebase.initializeApp(firebaseConfig)
 const messaging = firebase.messaging()

 messaging.getToken({ vapidKey: 'BACw_3D1R5Bx8fKeiy1z5oWm-udIPFq8KqErl2a2Yg3NX0VlRY37Y66GKYVWprsP0BHS62D3Id-_lMhJvFgzlSU' }).then((currentToken) => {
  if (currentToken) {
    console.log(currentToken)
    // CometChat.registerTokenForPushNotification(currentToken).then((payload)=>{
    //     console.log("from comet",payload)
        
    // }).catch((err)=>{
    //     console.log(err)
    // });
  } else {
    console.log('No registration token available. Request permission to generate one.');
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
});



messaging.onMessage(function(payload) {
    console.log('Receiving foreground message');
    console.log(payload)
      var notificationTitle = payload.notification.title;
    var notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image
    };
  
    var notification = new Notification(notificationTitle, notificationOptions);
    notification.onclick = function(event) {
      notification.close();
      console.log(event);
    };
   });
  }
