import type { IdentityDocValidator } from "./IdentityDocValidator.js";

export class IdentityDocValidatorRegistry {
  private static readonly registry = new Map<string, IdentityDocValidator>();

  static register(type: string, validator: IdentityDocValidator): void {
    this.registry.set(type.toUpperCase(), validator);
  }

  static get(type: string): IdentityDocValidator {
    const validator = this.registry.get(type.toUpperCase());
    if (!validator) {
      throw new Error(`No validator registered for document type: ${type}`);
    }
    return validator;
  }
}
