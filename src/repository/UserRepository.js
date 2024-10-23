import Repository from './Repository'

const resource = '/users'
export default {
  async test() {
    return Repository.get(`${resource}/test`).then(response => {
      return response.data
    })
  },
  async forgotPassword(payload) {
    return Repository.post(`${resource}/forgot_password`, payload).then(
      response => {
        return response.data
      },
    )
  },
  async resetPassword(payload) {
    return Repository.post(`${resource}/reset_password`, payload).then(
      response => {
        return response.data
      },
    )
  },
}
