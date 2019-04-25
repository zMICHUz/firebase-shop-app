import { Route } from '@angular/compiler/src/core'

export class MenuItem {

  constructor (private text: string, private path: string) {}

  public getText () {
    return this.text
  }

  public getPath () {
    return this.path
  }
}
