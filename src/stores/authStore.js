import { defineStore } from 'pinia'
import { ref } from 'vue'
import { RepositoryFactory } from '@/repository/RepositoryFactory'
const AuthenticationRepository = RepositoryFactory.get('authentication')
const LocalStorageRepository = RepositoryFactory.get('localStorage')
const UserRepository = RepositoryFactory.get('users')

const userInfor = LocalStorageRepository.getUserInfor()
export const useAuthStore = defineStore('auth', () => {
  const user = ref(userInfor)
  const isLoggedIn = ref(userInfor ? true : false)
  const isRegisted = ref(false)
  const error = ref()

  const clearError = function () {
    error.value = ''
  }

  const login = function (loginRequest) {
    AuthenticationRepository.login(loginRequest)
      .then(response => {
        LocalStorageRepository.saveUser(JSON.stringify(response.data))
        user.value = response.data.infor
        isLoggedIn.value = true
        clearError()
      })
      .catch(err => {
        console.log(err)
        error.value = err.response.data.error
      })
  }

  const register = function (registerRequest) {
    AuthenticationRepository.register(registerRequest)
      .then(response => {
        console.log(response.data)
        isRegisted.value = true
        console.log(`registed in store ${isRegisted.value}`)
        clearError()
      })
      .catch(err => {
        console.log(err.response.data)
        error.value = err.response.data.error
      })
  }

  const logout = function () {
    LocalStorageRepository.clearUser()
    user.value = null
    isLoggedIn.value = false
  }

  const refresh = function () {
    AuthenticationRepository.refresh(LocalStorageRepository.getRefreshToken())
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err.response.data)
      })
  }

  const clickTest = function () {
    UserRepository.test()
  }

  return {
    isLoggedIn,
    user,
    error,
    isRegisted,
    // getLoggedIn,
    // getRegisted,
    // getError,
    clearError,
    login,
    logout,
    register,
    refresh,
    clickTest,
  }
})
