import { NgModule, Optional, SkipSelf } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'

import { throwIfAlreadyLoaded } from './module-import.guard'

import { RestService } from './rest.service'
import { LoggerService } from './logger.service'

@NgModule({
  imports: [ HttpClientModule ],
  exports: [],
  declarations: [],
  providers: [ RestService, LoggerService ]
})
export class CoreModule {
  constructor (
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule')
  }
}
