import { NgModule } from '@angular/core'
import { LayoutModule } from '@angular/cdk/layout'

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatDividerModule
} from '@angular/material'

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule

  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule
 
  ]
})

export class UserMaterialsModule { }
