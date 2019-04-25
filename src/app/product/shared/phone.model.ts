import { DefaultProduct } from './product.model'

export class Phone extends DefaultProduct {
  getName(){
    return `${super.getName()} phone`
  }
}
