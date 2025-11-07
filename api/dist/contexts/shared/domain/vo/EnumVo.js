import { ValueObject } from "./ValueObject.js";
export class EnumValueObject extends ValueObject {
    validValues;
    constructor(value, validValues) {
        super(value);
        this.validValues = validValues;
        this.checkValueIsValid(value);
    }
    checkValueIsValid(value) {
        if (!this.validValues.includes(value)) {
            this.throwErrorForInvalidValue(value);
        }
    }
}
