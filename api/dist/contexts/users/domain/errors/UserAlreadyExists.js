import { DomainError } from "../../../shared/domain/errors/DomainError.js";
export class UserAlreadyExists extends DomainError {
    id;
    code = 'user-already-exists';
    message = '';
    constructor(id) {
        super();
        this.id = id;
        this.message = `User with id ${id} already exists`;
    }
}
