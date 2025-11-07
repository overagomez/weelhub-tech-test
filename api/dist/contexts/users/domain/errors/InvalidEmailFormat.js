import { InvalidArgumentError } from "../../../shared/domain/errors/InvalidArgumentError.js";
export class InvalidEmailFormat extends InvalidArgumentError {
    code = 'invalid-email-format';
}
