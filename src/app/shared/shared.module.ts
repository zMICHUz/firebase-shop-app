import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import components from './index'

const routes: Routes = []

@NgModule({
  imports: [ CommonModule, RouterModule, MatButtonModule, MatCardModule, MatDialogModule, MatProgressSpinnerModule ],
  exports: [ components ],
  declarations: [ components ],
  providers: []
})
export class SharedModule {}
