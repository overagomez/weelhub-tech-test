import { PhoneNumberPrefix, PhoneNumberPrefixes } from "./PhoneNumberPrefix.js"
import { PhoneNumberSuffix } from "./PhoneNumberSuffix.js"

export type PhoneNumberPrimitives = {
    phoneNumberPrefix: string,
    phoneNumberSuffix: string
}

export class PhoneNumber {
  constructor (
        readonly phoneNumberPrefix: PhoneNumberPrefix,
        readonly phoneNumberSuffix: PhoneNumberSuffix
  ) {}

  toPrimitives (): PhoneNumberPrimitives {
    return {
      phoneNumberPrefix: this.phoneNumberPrefix.valueOf(),
      phoneNumberSuffix: this.phoneNumberSuffix.valueOf(),
    }
  }

  static fromPrimitives (
    phoneNumberPrefix: string,
    phoneNumberSuffix: string
  ): PhoneNumber {
    return new PhoneNumber(
      new PhoneNumberPrefix(phoneNumberPrefix as PhoneNumberPrefixes),
      new PhoneNumberSuffix(phoneNumberSuffix),
    )
  }
}