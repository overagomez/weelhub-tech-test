import type { IdentityDocNumber } from "../IdentityDocNumber.js";
import type { IdentityDocType } from "../IdentityDocType.js";
import type { IdentityDocValidator } from "./IdentityDocValidator.js";
import { IdentityDocValidatorRegistry } from "./IdentityDocValidatorRegistry.js";

export class IdentityDocValidatorContext {
  private strategy: IdentityDocValidator;

  constructor(identityDocType: string) {
    this.strategy = IdentityDocValidatorRegistry.get(identityDocType);
  }

  setStrategy(identityDocType: string): void {
    this.strategy = IdentityDocValidatorRegistry.get(identityDocType);
  }

  validate(identityDocNumber: string): boolean {
    return this.strategy.validate(identityDocNumber);
  }
}