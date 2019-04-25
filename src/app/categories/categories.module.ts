import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatCardModule } from '@angular/material/card'

import { AngularFirestoreModule } from '@angular/fire/firestore'

import { CategoriesRoutingModule } from './categories-routing.module'

import components from './'
import { ProductModule } from '../product/product.module'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    CategoriesRoutingModule,
    ProductModule,
    AngularFirestoreModule
  ],
  exports: [],
  declarations: [ components ],
  providers: []
})
export class CategoriesModule {}
