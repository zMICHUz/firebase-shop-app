import { Component, Input } from '@angular/core'

import { MenuItem } from '../menu-item.model'

@Component({
  selector: 'ui-menu',
  templateUrl: 'menu.component.html'
})
export class MenuComponent {
  @Input('items') menuItems: Array<MenuItem> = []
}
