import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanchosApproveRoutingModule } from './panchos-approve-routing.module';
import {MatCardModule} from '@angular/material/card';
import { PanchosApproveComponent } from './panchos-approve.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    PanchosApproveComponent
  ],
  imports: [
    CommonModule,
    PanchosApproveRoutingModule,
    MatCardModule,
    MatTabsModule,
    MatIconModule
  ],
})
export class PanchosApproveModule { }
