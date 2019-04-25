import { Component } from '@angular/core'
import { RestService } from '../../core/rest.service';

@Component({
  selector: 'ui-loading',
  templateUrl: 'loading.component.html',
  styleUrls: [ 'loading.component.scss' ]
})
export class LoadingComponent {
  constructor (private restService: RestService) {}
}
