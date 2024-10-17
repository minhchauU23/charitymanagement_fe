import AuthenticationRepository from './AuthenticationRepository'

const repositories = {
  authentication: AuthenticationRepository,
}

export const RepositoryFactory = {
  get: name => repositories[name],
}
