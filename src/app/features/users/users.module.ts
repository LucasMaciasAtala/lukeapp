import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { MembersComponent } from './components/members/members.component';
import { UserMaterialsModule } from './user-materials.module'

import { FormsModule }   from '@angular/forms';
import { FilterPipe } from '../../shared/filter.pipe'

@NgModule({
  declarations: [ProfileComponent, MembersComponent, FilterPipe],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UserMaterialsModule,
    FormsModule,
  ]
})
export class UsersModule { }
