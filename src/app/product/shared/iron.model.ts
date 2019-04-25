import { DefaultProduct } from './product.model'

export class Iron extends DefaultProduct {
  constructor (id: string, name: string, private watts?: string) {
    super(id, name)
  }

  getWatts () {
    return this.watts
  }
}
