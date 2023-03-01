import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardContentComponent
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('src/app/user/bookings/bookings.module').then((module) => module.BookingsModule),
  },
  {
    path: 'manage-events',
    loadChildren: () =>
      import('src/app/user/manage-events/manage-events.module').then((module) => module.ManageEventsModule),
  },
  {
    path: 'manage-services',
    loadChildren: () =>
      import('src/app/user/manage-services/manage-services.module').then((module) => module.ManageServicesModule),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('src/app/user/reports/reports.module').then((module) => module.ReportsModule),
  },
  {
    path: '**',
    redirectTo: 'user/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }