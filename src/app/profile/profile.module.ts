import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import components from './'

@NgModule({
  imports: [ CommonModule ],
  exports: [ components ],
  declarations: [ components ],
  providers: []
})
export class ProfileModule {}
