export abstract class ValueObject<T extends Object> {
  private readonly value: T

  constructor (value: T) {
    this.value = value
  }

  public equals (o: ValueObject<T>): boolean {
    if (this.constructor !== o.constructor) return false
    return this.value === o.valueOf()
  }

  valueOf () {
    return this.value
  }
}