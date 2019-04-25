import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomePageComponent } from './home'
import { PageNotFoundComponent } from './shared'
import { ProfilePageComponent } from './profile'
import { ProductDetailComponent } from './product'

const routes: Routes = [
  // Always go to home
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  // Lazy load example
  { path: 'categories', loadChildren: './categories/categories.module#CategoriesModule' },
  // If path is not defined go to error page
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
