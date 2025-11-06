import { v4, validate } from "uuid"
import { ValueObject } from "./ValueObject.js"
import { InvalidArgumentError } from "../errors/InvalidArgumentError.js"


export class Uuid extends ValueObject<string> {
  constructor (value: string) {
    super(value)

    this.ensureIsValidUuid(value)
  }

  static random (): Uuid {
    return new Uuid(v4())
  }

  private ensureIsValidUuid (id: string): void {
    if (!validate(id)) {
      throw new InvalidArgumentError(`<${this.constructor.name}> does not allow the value <${id}>`)
    }
  }
}