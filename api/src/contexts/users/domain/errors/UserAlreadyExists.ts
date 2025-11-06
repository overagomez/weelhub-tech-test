import { DomainError } from "../../../shared/domain/errors/DomainError.js"

export class UserAlreadyExists extends DomainError {
  code = 'user-already-exists'
  message = ''

  constructor (protected id: string) {
      super()
      this.message = `User with id ${id} already exists`
  }
}