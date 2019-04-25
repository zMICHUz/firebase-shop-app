import { Component } from '@angular/core'

import { MenuItem } from './shared'

@Component({
  selector: 'example-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  menu: Array<MenuItem> = [
    new MenuItem('Home', '/home'),
    new MenuItem('Todos', '/categories/all'),
    new MenuItem('Telefonía', '/categories/phone'),
    new MenuItem('Televisores', '/categories/tv'),
    new MenuItem('Neveras', '/categories/fridge'),
    new MenuItem('Especial', '/categories/special'),
    new MenuItem('Perfil', '/profile')
  ]
}
