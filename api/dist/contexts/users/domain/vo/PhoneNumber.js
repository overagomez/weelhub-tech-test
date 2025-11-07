import { PhoneNumberPrefix } from "./PhoneNumberPrefix.js";
import { PhoneNumberSuffix } from "./PhoneNumberSuffix.js";
export class PhoneNumber {
    phoneNumberPrefix;
    phoneNumberSuffix;
    constructor(phoneNumberPrefix, phoneNumberSuffix) {
        this.phoneNumberPrefix = phoneNumberPrefix;
        this.phoneNumberSuffix = phoneNumberSuffix;
    }
    toPrimitives() {
        return {
            phoneNumberPrefix: this.phoneNumberPrefix.valueOf(),
            phoneNumberSuffix: this.phoneNumberSuffix.valueOf(),
        };
    }
    static fromPrimitives(phoneNumberPrefix, phoneNumberSuffix) {
        return new PhoneNumber(new PhoneNumberPrefix(phoneNumberPrefix), new PhoneNumberSuffix(phoneNumberSuffix));
    }
}
