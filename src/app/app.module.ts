import { BrowserModule } from '@angular/platform-browser'
import { NgModule, ErrorHandler } from '@angular/core'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'

import { AngularFireModule } from '@angular/fire'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { SharedModule } from './shared/shared.module'
import { HomeModule } from './home/home.module'
import { ProfileModule } from './profile/profile.module'
import { CoreModule } from './core/core.module'
import { ProductModule } from './product/product.module'

import { firebase } from '../environments/conf/firebase'

class ErrorLogger implements ErrorHandler {
  handleError (error) {
    console.error('LOG ERROR', error)
  }
}

@NgModule({
  declarations: [ AppComponent ],
  imports:
    [
      BrowserModule,
      AngularFireModule.initializeApp(firebase),
      BrowserAnimationsModule,
      MatCardModule,
      AppRoutingModule,
      SharedModule,
      HomeModule,
      ProfileModule,
      ProductModule,
      CoreModule
    ],
  providers: [ { provide: ErrorHandler, useClass: ErrorLogger } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
