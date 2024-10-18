import AuthenticationRepository from './AuthenticationRepository'
import LocalStorageRepository from './LocalStorageRepository'
import UserRepository from './UserRepository'

const repositories = {
  authentication: AuthenticationRepository,
  localStorage: LocalStorageRepository,
  users: UserRepository,
}

export const RepositoryFactory = {
  get: name => repositories[name],
}
