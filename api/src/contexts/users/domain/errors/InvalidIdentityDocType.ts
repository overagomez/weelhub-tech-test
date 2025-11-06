import { InvalidArgumentError } from "../../../shared/domain/errors/InvalidArgumentError.js"


export class InvalidIdentityDocType extends InvalidArgumentError {
  override code = 'invalid-identity-doc-type'
}