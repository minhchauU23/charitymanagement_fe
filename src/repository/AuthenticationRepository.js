import Repository from './Repository'
const resource = '/auth'
export default {
  login(payload) {
    return Repository.post(`${resource}/login`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  refresh(refreshToken) {
    return Repository.post(`${resource}`, refreshToken)
  },
  logout() {},
  async register(payload) {
    return Repository.post(`${resource}/register`, payload).then(response => {
      return response.data
    })
  },
}
