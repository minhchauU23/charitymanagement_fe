import { defineStore } from 'pinia'
import { ref } from 'vue'
import { RepositoryFactory } from '@/repository/RepositoryFactory'
const AuthenticationRepository = RepositoryFactory.get('authentication')
// const TokenRepository = RepositoryFactory.get('token')
export const useAuthStore = defineStore('user', () => {
  const user = ref(localStorage.getItem('user'))
  const isLoggedIn = ref(localStorage.getItem('user') ? true : false)
  const isRegisted = ref(false)
  const error = ref()

  // const getError = computed(() => {
  //   return error.value
  // })

  // const getLoggedIn = computed(() => {
  //   return isLoggedIn.value
  // })

  // const getRegisted = computed(() => {
  //   return isRegisted.value
  // })

  const clearError = function () {
    error.value = ''
  }

  const login = function (loginRequest) {
    AuthenticationRepository.login(loginRequest)
      .then(response => {
        localStorage.setItem('user', response.data)
        isLoggedIn.value = true
        console.log(`logged in store ${isLoggedIn.value}`)
        clearError()
      })
      .catch(err => {
        console.log(err.response.data)
        error.value = err.response.data.error
      })
    // try {
    //   const response = await AuthenticationRepository.login(loginRequest)
    // localStorage.setItem('user', response.data.data)
    // isLoggedIn.value = true
    // clearError()
    // } catch (err) {
    // console.log(err.response.data)
    // error.value = err.response.data.error
    // }
    // TokenRepository.getAccessToken()
  }

  const register = function (registerRequest) {
    AuthenticationRepository.register(registerRequest)
      .then(response => {
        console.log(response)
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
    localStorage.removeItem('user')
    user.value = null
    isLoggedIn.value = false
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
  }
})
