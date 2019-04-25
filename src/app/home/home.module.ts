import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

import { MatCardModule } from '@angular/material/card'

import components from './'
import { NewsService } from './shared'

@NgModule({
  imports: [ CommonModule, HttpClientModule, MatCardModule ],
  exports: [ components ],
  declarations: [ components ],
  providers: [ NewsService ]
})
export class HomeModule {}
