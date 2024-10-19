import AuthenticationRepository from './AuthenticationRepository'
import ErrorCodeRepository from './ErrorCodeRepository'
import LocalStorageRepository from './LocalStorageRepository'
import UserRepository from './UserRepository'

const repositories = {
  authentication: AuthenticationRepository,
  localStorage: LocalStorageRepository,
  errorCode: ErrorCodeRepository,
  users: UserRepository,
}

export const RepositoryFactory = {
  get: name => repositories[name],
}
