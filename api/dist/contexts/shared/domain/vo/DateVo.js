import { ValueObject } from "./ValueObject.js";
export class DateValueObject extends ValueObject {
    constructor(value) {
        super(DateValueObject.removeMilliseconds(new Date(value)));
    }
    static removeMilliseconds(date) {
        return new Date(date.setMilliseconds(0));
    }
    daysOfDifference(date) {
        const oneDay = 1000 * 60 * 60 * 24;
        const diffInTime = this.valueOf().getTime() - date.getTime();
        return Math.round(diffInTime / oneDay);
    }
    daysFromToday() {
        return this.daysOfDifference(new Date());
    }
}
