import { DomainError } from "../../../shared/domain/errors/DomainError.js";
export class UserNotFound extends DomainError {
    id;
    code = 'user-not-found';
    message = '';
    constructor(id) {
        super();
        this.id = id;
        this.message = `User with id ${id} not found`;
    }
}
