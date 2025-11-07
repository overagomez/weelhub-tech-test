import { StringValueObject } from "../../../shared/domain/vo/StringVo.js";
export class IdentityDocNumber extends StringValueObject {
    constructor(value) {
        const normalized = value.replace(/[\s\-().]/g, '');
        super(normalized);
    }
}
