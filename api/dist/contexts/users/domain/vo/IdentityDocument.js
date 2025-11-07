import { InvalidIdentityDocFormat } from "../errors/InvalidIdentityDocFormat.js";
import { IdentityDocValidatorContext } from "./identityDocStrategy/IdentityDocValidatorContext.js";
export class IdentityDocument {
    identityDocNumber;
    identityDocType;
    constructor(identityDocNumber, identityDocType) {
        this.identityDocNumber = identityDocNumber;
        this.identityDocType = identityDocType;
        const validatorContext = new IdentityDocValidatorContext(identityDocType.valueOf());
        if (!validatorContext.validate(identityDocNumber.valueOf()))
            throw new InvalidIdentityDocFormat(`The identity document ${identityDocNumber.valueOf()} isn't valid for ${identityDocType.valueOf()}`);
    }
    toPrimitives() {
        return {
            identityDocNumber: this.identityDocNumber,
            identityDocType: this.identityDocType,
        };
    }
}
