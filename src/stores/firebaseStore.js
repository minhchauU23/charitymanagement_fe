// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getMessaging } from 'firebase/messaging/sw'
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
// const analytics = getAnalytics(app);
const messaging = getMessaging(app)
