import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './core/layouts/content/content.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'joblist',
    loadChildren: () => import('../app/module/job-list/job-list.module').then((x) => x.JobListModule),
  },
  {
    path: 'jobupdate',
    loadChildren: () => import('../app/module/job-update/job-update.module').then((x) => x.JobUpdateModule),
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('../app/module/home/home.module').then((x) => x.HomeModule),
  // },
  {
    path: 'home',
    component: ContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
