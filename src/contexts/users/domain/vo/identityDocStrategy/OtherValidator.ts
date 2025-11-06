import type { IdentityDocValidator } from "./IdentityDocValidator.js";

export class OtherValidator implements IdentityDocValidator {
  validate(identityDocNumber: string): boolean {
    if (!identityDocNumber) return false;
    return true
  }
}