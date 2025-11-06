import { InvalidArgumentError } from "../../../shared/domain/errors/InvalidArgumentError.js";

export class InvalidPhoneNumberFormat extends InvalidArgumentError {
  override code = 'invalid-phone-number-format'
}