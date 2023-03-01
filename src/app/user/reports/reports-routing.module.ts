import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetweenDatesBookingsComponent } from './components/between-dates-bookings/between-dates-bookings.component';
import { MonthlyBookingsComponent } from './components/monthly-bookings/monthly-bookings.component';
import { TopServicesComponent } from './components/top-services/top-services.component';
import { WeeklyBookingsComponent } from './components/weekly-bookings/weekly-bookings.component';

const routes: Routes = [
  {
    path: 'weekly-bookings',
    component: WeeklyBookingsComponent
  },
  {
    path: 'monthly-bookings',
    component: MonthlyBookingsComponent
  },
  {
    path: 'between-dates-bookings',
    component: BetweenDatesBookingsComponent
  },
  {
    path: 'top-services',
    component: TopServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
