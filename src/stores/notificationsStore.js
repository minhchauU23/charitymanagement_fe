import { RepositoryFactory } from '@/repository/RepositoryFactory'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { onMessage } from 'firebase/messaging'
import { firebaseMessaging } from '@/config/firebase'
const notificationRepository = RepositoryFactory.get('notifications')
const localStorageRepository = RepositoryFactory.get('localStorage')
export const useNotificationStore = defineStore('notification', () => {
  const registration = ref('')
  onMessage(firebaseMessaging, payload => {
    console.log('message received ', payload)
  })
  const requestRegistration = function () {
    // notificationRepository.getRegistration()
    notificationRepository
      .getRegistration()
      .then(token => {
        registration.value = token
        return token
      })
      .then(token => {
        const userID = localStorageRepository.getUserInfor().id
        console.log('token at request ' + token)
        notificationRepository.newTokenUser(userID, { registration: token })
      })
      .catch(err => {
        console.log(err)
      })
    // console.log(res)
  }
  const test = function () {
    notificationRepository.test()
  }
  return { requestRegistration, test }
})
