import { EnumValueObject } from "../../../shared/domain/vo/EnumVo.js";
import { InvalidIdentityDocType } from "../errors/InvalidIdentityDocType.js";
export var IdentityDocTypes;
(function (IdentityDocTypes) {
    IdentityDocTypes["DNI"] = "DNI";
    IdentityDocTypes["NIE"] = "NIE";
    IdentityDocTypes["PASSPORT"] = "PASSPORT";
    IdentityDocTypes["NIF"] = "NIF";
    IdentityDocTypes["OTHER"] = "OTHER";
})(IdentityDocTypes || (IdentityDocTypes = {}));
export class IdentityDocType extends EnumValueObject {
    constructor(type) {
        super(type, Object.values(IdentityDocTypes));
    }
    throwErrorForInvalidValue(value) {
        throw new InvalidIdentityDocType(`The identity document type ${value} isn't valid`);
    }
}
