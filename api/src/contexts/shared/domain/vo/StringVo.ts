import { ValueObject } from "./ValueObject.js";

export abstract class StringValueObject extends ValueObject<string> {
  constructor (value: string) {
    super(value)
  }
}