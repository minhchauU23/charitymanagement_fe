// import messaging from '@/config/firebase'
// import { getToken } from 'firebase/messaging'
// import { getToken } from 'firebase/messaging'
import { firebaseMessaging } from '../config/firebase'
import { getToken } from 'firebase/messaging'
import Repository from './Repository'
const resource = '/notifications'
export default {
  getRegistration() {
    // console.log(registration)
    // const messaging = getMessaging(app)
    return getToken(firebaseMessaging, {
      vapidKey:
        'BP13lW1FFegT0hzuOB22BOFE6EhN-z4eq7ex71cGFh41fYAyqaRa2BrmQ0peatxrn_yG9PEN1njT-UEx1JMMk9w',
    })
      .then(currentToken => {
        if (currentToken) {
          console.log(currentToken)
          // Send the token to your server and update the UI if necessary
          // ...
          return currentToken
        } else {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              console.log('Notification permission granted.')
            }
          })
          // Show permission request UI
          console.log(
            'No registration token available. Request permission to generate one.',
          )
          // ...
        }
      })
      .catch(err => {
        console.log('An error occurred while retrieving token. ', err)
        // ...
      })
  },
  async newTokenUser(userId, payload) {
    return Repository.post(
      `${resource}/${userId}/firebase/registration`,
      payload,
    )
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  },
  async test() {
    return Repository.get(`campaigns/test`)
      .then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
  },
}
