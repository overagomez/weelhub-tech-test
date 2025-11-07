export class IdentityDocValidatorRegistry {
    static registry = new Map();
    static register(type, validator) {
        this.registry.set(type.toUpperCase(), validator);
    }
    static get(type) {
        const validator = this.registry.get(type.toUpperCase());
        if (!validator) {
            throw new Error(`No validator registered for document type: ${type}`);
        }
        return validator;
    }
}
