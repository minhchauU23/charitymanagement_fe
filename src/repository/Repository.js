import axios from 'axios'
import AuthenticationRepository from './AuthenticationRepository'
import LocalStorageRepository from './LocalStorageRepository'

const baseDomain = 'http://localhost:8080/'
const baseURL = `${baseDomain}api/v1`
const Repository = axios.create({
  baseURL,
})

Repository.interceptors.request.use(
  config => {
    const token = LocalStorageRepository.getAccessToken()
    config.headers['Content-Type'] = 'application/json'
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token // for Spring Boot back-end
      // config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

Repository.interceptors.response.use(
  res => {
    return res
  },
  error => {
    const originalConfig = error.config
    if (
      originalConfig.url !== '/login' &&
      error.response.status === 401 &&
      !originalConfig._retry
    ) {
      originalConfig._retry = true

      return AuthenticationRepository.refresh(
        LocalStorageRepository.getRefreshToken(),
      )
        .then(response => {
          LocalStorageRepository.saveUser(JSON.stringify(response.data.data))
          return Repository(originalConfig)
        })
        .catch(err => {
          return Promise.reject(err)
        })
    }
    return Promise.reject(error)
  },
)

export default Repository
