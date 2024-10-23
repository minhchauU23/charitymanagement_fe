import { RepositoryFactory } from '@/repository/RepositoryFactory'
import { defineStore } from 'pinia'
import { ref } from 'vue'
const UserRepository = RepositoryFactory.get('users')
const ErrorCodeRepository = RepositoryFactory.get('errorCode')
export const useUserStore = defineStore('user', () => {
  const errors = ref({})
  const isForgotSuccess = ref(false)
  const isResetSuccess = ref(false)
  const forgotPassword = function (body) {
    clearError()
    UserRepository.forgotPassword(body)
      .then(response => {
        console.log(response)
        isForgotSuccess.value = true
      })
      .catch(err => {
        console.log(err)
        const response = err.response.data.errors
        console.log(response)

        const flatError = {}
        for (const [code, message] of Object.entries(response)) {
          flatError[ErrorCodeRepository.get(code)] = message
        }
        errors.value = flatError
      })
  }
  const clearError = function () {
    errors.value = ''
  }

  const resetPassword = function (body) {
    clearError()
    UserRepository.resetPassword(body)
      .then(response => {
        console.log(response)
        isResetSuccess.value = true
      })
      .catch(err => {
        console.log(err)
        const response = err.response.data.errors
        console.log(response)

        const flatError = {}
        for (const [code, message] of Object.entries(response)) {
          flatError[ErrorCodeRepository.get(code)] = message
        }
        errors.value = flatError
      })
  }

  return {
    forgotPassword,
    resetPassword,
    errors,
    clearError,
    isResetSuccess,
    isForgotSuccess,
  }
})
