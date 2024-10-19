import Repository from './Repository'

const resource = '/users'
export default {
  async test() {
    return Repository.get(`${resource}/test`).then(response => {
      return response.data
    })
  },
}
