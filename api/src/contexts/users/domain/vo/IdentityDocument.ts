import { InvalidIdentityDocFormat } from "../errors/InvalidIdentityDocFormat.js"
import type { IdentityDocNumber } from "./IdentityDocNumber.js"
import { IdentityDocValidatorContext } from "./identityDocStrategy/IdentityDocValidatorContext.js"
import type { IdentityDocType } from "./IdentityDocType.js"

export type IdentityDocPrimitives = {
    identityDocNumber: IdentityDocNumber,
    identityDocType: IdentityDocType
}

export class IdentityDocument {
  constructor (
    readonly identityDocNumber: IdentityDocNumber,
    readonly identityDocType: IdentityDocType
  ) {
    const validatorContext = new IdentityDocValidatorContext(identityDocType.valueOf())
    if (!validatorContext.validate(identityDocNumber.valueOf())) throw new InvalidIdentityDocFormat(`The identity document ${identityDocNumber.valueOf()} isn't valid for ${identityDocType.valueOf()}`)
  }

  toPrimitives(): IdentityDocPrimitives {
    return {
      identityDocNumber: this.identityDocNumber,
      identityDocType: this.identityDocType,
    };
  }
}