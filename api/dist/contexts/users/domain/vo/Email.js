import { StringValueObject } from "../../../shared/domain/vo/StringVo.js";
import { InvalidEmailFormat } from "../errors/InvalidEmailFormat.js";
export class Email extends StringValueObject {
    constructor(value) {
        super(value);
        this.checkIsValid(value);
    }
    checkIsValid(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
            throw new InvalidEmailFormat(`The email ${value} doesn't have a valid format`);
    }
}
