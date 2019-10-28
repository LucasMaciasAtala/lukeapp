import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: './features/users/users.module#UsersModule'
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'panchos-approve',
    loadChildren: () => import('./features/panchos-approve/panchos-approve.module').then(mod => mod.PanchosApproveModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(mod => mod.LoginModule)
  },
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: './features/home/home.module#HomeModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
