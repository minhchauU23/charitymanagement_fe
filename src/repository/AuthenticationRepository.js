import Repository from './Repository'
const resource = '/auth'
export default {
  async login(payload) {
    return Repository.post(`${resource}/login`, payload).then(response => {
      return response.data
    })
  },
  refresh(refreshToken) {
    return Repository.post(`${resource}/refresh`, refreshToken)
  },
  logout() {},
  async register(payload) {
    return Repository.post(`${resource}/register`, payload).then(response => {
      return response.data
    })
  },
}
