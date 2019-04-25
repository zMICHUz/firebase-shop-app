import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  title = 'Simple example of Angular'

  @Input('menu') menuItems

  constructor () {}

  ngOnInit () {}
}
