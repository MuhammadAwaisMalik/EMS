import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { WeeklyBookingsComponent } from './components/weekly-bookings/weekly-bookings.component';
import { MonthlyBookingsComponent } from './components/monthly-bookings/monthly-bookings.component';
import { TopServicesComponent } from './components/top-services/top-services.component';
import { BetweenDatesBookingsComponent } from './components/between-dates-bookings/between-dates-bookings.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    WeeklyBookingsComponent,
    MonthlyBookingsComponent,
    TopServicesComponent,
    BetweenDatesBookingsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    DataTablesModule,
  ]
})
export class ReportsModule { }
