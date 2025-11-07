import { DomainError } from "./DomainError.js";
export class InvalidArgumentError extends DomainError {
    message;
    code = 'invalid-argument';
    constructor(message) {
        super();
        this.message = message;
    }
}
