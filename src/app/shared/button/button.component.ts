import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'ui-button',
  templateUrl: 'button.component.html'
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'pepe'
  @Output() executeAction: EventEmitter<string> = new EventEmitter<string>()

  constructor () {}

  ngOnInit () {}

  onClick () {
    this.executeAction.emit(this.text)
  }
}
