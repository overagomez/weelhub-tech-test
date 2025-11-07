import { v4, validate } from "uuid";
import { ValueObject } from "./ValueObject.js";
import { InvalidArgumentError } from "../errors/InvalidArgumentError.js";
export class Uuid extends ValueObject {
    constructor(value) {
        super(value);
        this.ensureIsValidUuid(value);
    }
    static random() {
        return new Uuid(v4());
    }
    ensureIsValidUuid(id) {
        if (!validate(id)) {
            throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`);
        }
    }
}
