// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDp-0vVveMIkt1JLcsRRgBvfxUutmS6cko',
  authDomain: 'charity-management-b88b2.firebaseapp.com',
  projectId: 'charity-management-b88b2',
  storageBucket: 'charity-management-b88b2.appspot.com',
  messagingSenderId: '1066596117230',
  appId: '1:1066596117230:web:e3c032a436e68e436821ff',
  measurementId: 'G-C39B9K06M7',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// Initialize Firebase Cloud Messaging and get a reference to the service
const firebaseMessaging = getMessaging(app)
// const permission = await Notification.requestPermission()
// Notification.requestPermission().then(permission => {
//   if (permission === 'granted') {
//     console.log('Notification permission granted.')
//   }
// })

// function requestPermission() {
//   console.log('Requesting permission...');
//   Notification.requestPermission().then((permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//     }
//   })
// }

// getToken(messaging, {
//   vapidKey:
//     'BP13lW1FFegT0hzuOB22BOFE6EhN-z4eq7ex71cGFh41fYAyqaRa2BrmQ0peatxrn_yG9PEN1njT-UEx1JMMk9w',
// })
//   .then(currentToken => {
//     if (currentToken) {
//       console.log(currentToken)
//       // Send the token to your server and update the UI if necessary
//       // ...
//     } else {
//       Notification.requestPermission().then(permission => {
//         if (permission === 'granted') {
//           console.log('Notification permission granted.')
//         }
//       })
//       // Show permission request UI
//       console.log(
//         'No registration token available. Request permission to generate one.',
//       )
//       // ...
//     }
//   })
//   .catch(err => {
//     console.log('An error occurred while retrieving token. ', err)
//     // ...
//   })

export { firebaseMessaging }
