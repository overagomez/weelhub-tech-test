export class DomainError {
    getMessage() {
        return `[${this.code}] ${this.message}`;
    }
}
