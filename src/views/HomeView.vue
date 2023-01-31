<script setup>
import { onMounted } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
// import { getMessaging, getToken } from "firebase/messaging";
// import firebase from 'firebase/app'
// import "firebase/firebase-messaging";

onMounted(() => {
  // // Initialize Firebase Cloud Messaging and get a reference to the service
  // const messaging = getMessaging(app);
  // const messaging = firebase.messaging();
  // await getToken(messaging, {
  //   vapidKey:
  //     "BACw_3D1R5Bx8fKeiy1z5oWm-udIPFq8KqErl2a2Yg3NX0VlRY37Y66GKYVWprsP0BHS62D3Id-_lMhJvFgzlSU",
  // }).then((currentToken) => {
  //   if (currentToken) {
  //     console.log("currentToken", currentToken);
  //   } else {
  //     console.log("cant see token");
  //   }
  // });
});
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
