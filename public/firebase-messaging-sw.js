/* eslint-disable no-undef */
// importScripts("https://www.gstatic.com/firebasejs/9.16.0/firebase-app-compact.js");
// importScripts(
//   "https://www.gstatic.com/firebasejs/9.16.0/firebase-messaging-compact.js"
// );

// // try {
// var firebaseConfig = {
//   apiKey: "AIzaSyCeuw-4YqZgQ-MryU1nKFClIHWOoDnZZNE",
//   authDomain: "push-notification-9e279.firebaseapp.com",
//   projectId: "push-notification-9e279",
//   storageBucket: "push-notification-9e279.appspot.com",
//   messagingSenderId: "401149055712",
//   appId: "1:401149055712:web:623ddb4cd7f52f3c11b685",
//   measurementId: "G-S91CTD32W8",
// };

// const app = firebase.initializeApp(firebaseConfig);

// //   const messaging = firebase.messaging();

// //   messaging.setBackgroundMesssageHandler(function (payload) {
// //     const title = payload.data.username;

// //     const options = {
// //       body: payload.data.message,
// //     };

// //     return self.registration.showNotification(title, options);
// //   });
// // } catch (err) {
// //   console.log(err);
// // }
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");

// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCeuw-4YqZgQ-MryU1nKFClIHWOoDnZZNE",
  authDomain: "push-notification-9e279.firebaseapp.com",
  projectId: "push-notification-9e279",
  storageBucket: "push-notification-9e279.appspot.com",
  messagingSenderId: "401149055712",
  appId: "1:401149055712:web:623ddb4cd7f52f3c11b685",
  measurementId: "G-S91CTD32W8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.messaging();
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  console.log("testing sevice worker");
  console.log(payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// messaging.onMessage(function(payload) {
//   console.log('Receiving foreground message');
//   console.log(payload)
//     var notificationTitle = 'vue-cometchat-firebase';
//   var notificationOptions = {
//     body: payload.notification.body,
//     icon: '',
//   };

//   var notification = new Notification(notificationTitle, notificationOptions);
//   notification.onclick = function(event) {
//     notification.close();
//     console.log(event);
//   };
//  });
// export default app;

// Retrieve firebase messaging
// const messagingg = firebase.messaging();

// messagingg.onBackgroundMessage(function(payload) {
// console.log('Received background message ', payload);

// const notificationTitle = payload.notification.title;
// const notificationOptions = {
// body: payload.notification.body,
// };

// self.registration.showNotification(notificationTitle,
// notificationOptions);
// });

// // Initialize Firebase Cloud Messaging and get a reference to the service
// const messaging = getMessaging(app);
// getToken(messaging, {
//   vapidKey:
//     "BACw_3D1R5Bx8fKeiy1z5oWm-udIPFq8KqErl2a2Yg3NX0VlRY37Y66GKYVWprsP0BHS62D3Id-_lMhJvFgzlSU",
// }).then((currentToken) => {
//   if (currentToken) {
//     console.log("currentToken", currentToken);
//   } else {
//     console.log("cant see token");
//   }
// });
