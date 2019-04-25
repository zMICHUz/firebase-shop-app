import { Component, OnInit } from '@angular/core'
import { Profile } from '../shared'

@Component({
  templateUrl: 'profile-page.component.html'
})
export class ProfilePageComponent implements OnInit {
  profile: Profile

  constructor () {}

  ngOnInit () {}
}
