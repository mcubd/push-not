importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"); // Using compat for app just in case
importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"); // Using compat for messaging


const firebaseConfig = {
           apiKey: "AIzaSyBzaFL1XOU-_152duOo0baL1DfgVVuSwMI",
    authDomain: "test2-5bbd8.firebaseapp.com",
    databaseURL: "https://test2-5bbd8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test2-5bbd8",
    storageBucket: "test2-5bbd8.appspot.com",
    messagingSenderId: "683307239625",
    appId: "1:683307239625:web:d28ed1c2fb6b31dd4e6518"
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
