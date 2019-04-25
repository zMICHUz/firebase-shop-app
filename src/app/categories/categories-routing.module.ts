import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { CategoryComponent, SpecialCategoryComponent } from './'

const routes: Routes = [
  { path: 'special', component: SpecialCategoryComponent },
  { path: ':category', component: CategoryComponent }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class CategoriesRoutingModule {}
