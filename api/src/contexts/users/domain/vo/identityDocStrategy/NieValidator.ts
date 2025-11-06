import type { IdentityDocValidator } from "./IdentityDocValidator.js";

export class NieValidator implements IdentityDocValidator {
  validate(identityDocNumber: string): boolean {
    if (!identityDocNumber) return false;

    identityDocNumber = identityDocNumber.toUpperCase().trim();
    const nieRegex = /^[XYZ]\d{7}[A-Z]$/;

    if (!nieRegex.test(identityDocNumber)) return false;

    const prefix = identityDocNumber.charAt(0);
    const numbers = identityDocNumber.substring(1, 7);
    const letter = identityDocNumber.charAt(8);

    const prefixMap: Record<string, string> = {
      X: "0",
      Y: "1",
      Z: "2",
    };

    const numericNie = prefixMap[prefix] + numbers;
    const number = parseInt(numericNie, 10);
    const validLetters = "TRWAGMYFPDXBNJZSQVHLCKE";
    const expectedLetter = validLetters[number % 23];

    return letter === expectedLetter;
  }
}