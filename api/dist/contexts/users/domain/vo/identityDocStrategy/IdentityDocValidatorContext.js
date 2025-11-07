import { IdentityDocValidatorRegistry } from "./IdentityDocValidatorRegistry.js";
export class IdentityDocValidatorContext {
    strategy;
    constructor(identityDocType) {
        this.strategy = IdentityDocValidatorRegistry.get(identityDocType);
    }
    setStrategy(identityDocType) {
        this.strategy = IdentityDocValidatorRegistry.get(identityDocType);
    }
    validate(identityDocNumber) {
        return this.strategy.validate(identityDocNumber);
    }
}
