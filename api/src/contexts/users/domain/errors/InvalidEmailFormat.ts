import { InvalidArgumentError } from "../../../shared/domain/errors/InvalidArgumentError.js";

export class InvalidEmailFormat extends InvalidArgumentError {
  override code = 'invalid-email-format'
}