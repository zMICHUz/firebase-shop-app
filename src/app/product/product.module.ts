import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AngularFirestoreModule } from '@angular/fire/firestore'

import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatDividerModule } from '@angular/material/divider'

import { SharedModule } from '../shared/shared.module'

import components from './'
import { ProductService } from './shared/product.service'

@NgModule({
  imports:
    [
      CommonModule,
      MatCardModule,
      MatGridListModule,
      MatDividerModule,
      RouterModule,
      SharedModule,
      AngularFirestoreModule
    ],
  exports: [ components ],
  declarations: [ components ],
  providers: [ ProductService ]
})
export class ProductModule {}
