export class NifValidator {
    validate(identityDocNumber) {
        if (!identityDocNumber)
            return false;
        identityDocNumber = identityDocNumber.toUpperCase().trim();
        const nifRegex = /^[ABCDEFGHJKLMNPQRSUVW]\d{7}[0-9A-J]$/;
        if (!nifRegex.test(identityDocNumber))
            return false;
        const letters = "JABCDEFGHI";
        const numbers = identityDocNumber.substring(1, 8).split("").map(Number);
        const controlChar = identityDocNumber[8];
        const typeLetter = identityDocNumber[0];
        let sumA = 0; // even positions
        let sumB = 0; // odd positions (doubled and summed)
        numbers.forEach((num, i) => {
            if (i % 2 === 0) {
                const doubled = num * 2;
                sumB += Math.floor(doubled / 10) + (doubled % 10);
            }
            else {
                sumA += num;
            }
        });
        const total = sumA + sumB;
        const controlDigit = (10 - (total % 10)) % 10;
        const controlLetter = letters[controlDigit];
        const letterTypes = "PQRSNW";
        const digitTypes = "ABEH";
        const eitherTypes = "CDFGJLMUV";
        if (letterTypes.includes(typeLetter)) {
            return controlChar === controlLetter;
        }
        if (digitTypes.includes(typeLetter)) {
            return controlChar === String(controlDigit);
        }
        if (eitherTypes.includes(typeLetter)) {
            return controlChar === String(controlDigit) || controlChar === controlLetter;
        }
        return false;
    }
}
