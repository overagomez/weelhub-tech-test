export class PassportValidator {
    validate(identityDocNumber) {
        if (!identityDocNumber)
            return false;
        identityDocNumber = identityDocNumber.toUpperCase().trim();
        const passportRegex = /^[A-Z]{1,2}\d{6,7}[A-Z]?$/;
        return passportRegex.test(identityDocNumber);
    }
}
