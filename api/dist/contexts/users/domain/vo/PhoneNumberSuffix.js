import { StringValueObject } from "../../../shared/domain/vo/StringVo.js";
import { InvalidPhoneNumberFormat } from "../errors/InvalidPhoneNumberFormat.js";
export class PhoneNumberSuffix extends StringValueObject {
    constructor(value) {
        const normalized = value.replace(/[\s\-().]/g, '');
        super(normalized);
        this.checkIsValid(normalized);
    }
    checkIsValid(value) {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        if (!phoneRegex.test(value))
            throw new InvalidPhoneNumberFormat(`The phone number ${value} doesn't have a valid format`);
    }
}
