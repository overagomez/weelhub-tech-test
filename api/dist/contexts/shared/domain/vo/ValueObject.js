export class ValueObject {
    value;
    constructor(value) {
        this.value = value;
    }
    equals(o) {
        if (this.constructor !== o.constructor)
            return false;
        return this.value === o.valueOf();
    }
    valueOf() {
        return this.value;
    }
}
