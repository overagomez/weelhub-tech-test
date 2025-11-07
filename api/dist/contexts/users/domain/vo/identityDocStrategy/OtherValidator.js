export class OtherValidator {
    validate(identityDocNumber) {
        if (!identityDocNumber)
            return false;
        return true;
    }
}
