// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js');
import  { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js"

import { getMessaging } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js"
// self.importScripts('/fire-app.js');
// self.importScripts('/fire-msg.js');
// self.importScripts('/z');

// console.log(self)


// self.importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js')


var firebase=initializeApp({
    apiKey: "AIzaSyA5gs25IDoaJfCE5_tI7ulE8zossMcnnkY",
    authDomain: "jsprj-b0693.firebaseapp.com",
    databaseURL: "https://jsprj-b0693-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "jsprj-b0693", 
    storageBucket: "jsprj-b0693.appspot.com",
    messagingSenderId: "581883143558",
    appId: "1:581883143558:web:26fa31b2aa1b5afd19b807",
    measurementId: "G-VVQ6N17N9M"
});
 
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const msg = getMessaging(firebase)

console.log(msg)

if(msg.isSupported()){
    console.log('0')
}else{
    console.log('k')
}



msg.requestPermission().then(()=>{
  return msg.getToken();
}).then((data)=>{
  console.warn("token",data)
})
