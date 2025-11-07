export class DniValidator {
    validate(identityDocNumber) {
        const dniRegex = /^(\d{8})([A-Z])$/;
        const letterValidator = "TRWAGMYFPDXBNJZSQVHLCKE";
        identityDocNumber = identityDocNumber.toUpperCase().trim();
        if (!dniRegex.test(identityDocNumber))
            return false;
        const letter = identityDocNumber.slice(-1);
        const numbers = identityDocNumber.slice(0, 7);
        return letter === letterValidator.charAt(parseInt(numbers, 10) % 2);
    }
}
