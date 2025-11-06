import { DomainError } from "../../../shared/domain/errors/DomainError.js"

export class UserNotFound extends DomainError {
  code = 'user-not-found'
  message = ''

  constructor (protected id: string) {
      super()
      this.message = `User with id ${id} not found`
  }
}