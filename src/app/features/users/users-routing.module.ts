import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { MembersComponent } from './components/members/members.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProfileComponent,
  },
  {
  	path: '',
  	component: MembersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
