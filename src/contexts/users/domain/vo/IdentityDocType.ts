import { EnumValueObject } from "../../../shared/domain/vo/EnumVo.js"
import { InvalidIdentityDocType } from "../errors/InvalidIdentityDocType.js"

export enum IdentityDocTypes {
    DNI = 'DNI',
    NIE = 'NIE',
    PASSPORT = 'PASSPORT',
    NIF = 'NIF',
    OTHER = 'OTHER'
}

export class IdentityDocType extends EnumValueObject<IdentityDocTypes> {
  constructor (type: IdentityDocTypes) {
    super(type, Object.values(IdentityDocTypes))
  }

  protected throwErrorForInvalidValue (value: IdentityDocTypes): void {
    throw new InvalidIdentityDocType(`The identity document type ${value} isn't valid`)
  }
}