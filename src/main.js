import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// import "./firebase-messaging-sw";
// import * as firebase from "firebase/app";
// import "firebase/messaging";

// // // Initialize Firebase
// firebase.initializeApp({
//   messagingSenderId: "744798928283",
// });

// navigator.serviceWorker
//   .register("firebase-messaging-sw.js", {
//     scope: "firebase-cloud-messaging-push-scope",
//   })
//   .then((registration) => {
//     const messaging = firebase.messaging();
//     messaging.useServiceWorker(registration);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // fiebase configs end
// import firebaseMessaging from "../src/firebase";

// import firebaseMessaging from '../public/firebase';


const app = createApp(App);
// app.config.globalProperties.$messaging = firebaseMessaging;
app.use(createPinia());
app.use(router);

app.mount("#app");
