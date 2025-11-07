import { InvalidArgumentError } from "../../../shared/domain/errors/InvalidArgumentError.js";
export class InvalidIdentityDocType extends InvalidArgumentError {
    code = 'invalid-identity-doc-type';
}
