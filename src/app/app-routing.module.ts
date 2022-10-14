import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('../app/module/login/login.module').then((x) => x.LoginModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('../app/module/profile/profile.module').then((x) => x.ProfileModule),
  },
  {
    path: 'profile/update',
    loadChildren: () => import('../app/module/profile/update/update.module').then((x) => x.UpdateModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/module/admin/admin.module').then((x) => x.AdminModule),
  },
  {
    path: 'admin/dashboard',
    loadChildren: () => import('../app/module/admin/dashboard/dashboard.module').then((x) => x.DashboardModule),
  },
  {
    path: 'home',
    loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
