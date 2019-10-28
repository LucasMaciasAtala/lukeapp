import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanchosApproveComponent } from './panchos-approve.component';

const routes: Routes = [
{
  path: '',
  component: PanchosApproveComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanchosApproveRoutingModule { }
