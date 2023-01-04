importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA5gs25IDoaJfCE5_tI7ulE8zossMcnnkY",
  authDomain: "jsprj-b0693.firebaseapp.com",
  databaseURL: "https://jsprj-b0693-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jsprj-b0693",
  storageBucket: "jsprj-b0693.appspot.com",
  messagingSenderId: "581883143558",
  appId: "1:581883143558:web:26fa31b2aa1b5afd19b807",
  measurementId: "G-VVQ6N17N9M"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//     icon: payload.notification.image,
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
