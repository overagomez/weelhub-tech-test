import { InvalidArgumentError } from "../../../shared/domain/errors/InvalidArgumentError.js";
export class InvalidIdentityDocFormat extends InvalidArgumentError {
    code = 'invalid-identity-doc-format';
}
