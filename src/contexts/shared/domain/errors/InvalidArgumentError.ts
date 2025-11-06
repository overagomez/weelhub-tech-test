import { DomainError } from "./DomainError.js"

export class InvalidArgumentError extends DomainError {
  protected code = 'invalid-argument'

  constructor (protected message: string) {
    super()
  }
}