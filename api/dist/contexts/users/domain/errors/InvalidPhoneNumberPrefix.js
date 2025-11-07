import { InvalidArgumentError } from "../../../shared/domain/errors/InvalidArgumentError.js";
export class InvalidPhoneNumberPrefix extends InvalidArgumentError {
    code = 'invalid-phone-number-prefix';
}
