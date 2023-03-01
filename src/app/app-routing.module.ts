import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/dashboard',
    pathMatch: "full"
  },
  {
    path: 'user',
    loadChildren: () =>
      import('src/app/user/user.module').then((module) => module.UserModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('src/app/admin/admin.module').then((module) => module.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
