import { DefaultProduct } from './product.model'

export class Television extends DefaultProduct {
  constructor (id: string, name: string, private inches?: string) {
    super(id, name)
  }

  getInches () {
    return this.inches
  }
}
