import { Product } from './product.interface'

export class DefaultProduct implements Product {
  constructor (private id: string, private name: string) {}

  getId () {
    return this.id
  }

  getName () {
    return this.name
  }
}
