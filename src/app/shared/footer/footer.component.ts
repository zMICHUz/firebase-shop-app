import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ui-footer',
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
  footerText = 'This is a footer'

  constructor () {}

  ngOnInit () {}
}
