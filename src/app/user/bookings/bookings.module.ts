import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingsRoutingModule } from './bookings-routing.module';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AprovedBookingsComponent } from './components/aproved-bookings/aproved-bookings.component';
import { PendingBookingsComponent } from './components/pending-bookings/pending-bookings.component';
import { CanceledBookingsComponent } from './components/canceled-bookings/canceled-bookings.component';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddBookingComponent,
    AprovedBookingsComponent,
    PendingBookingsComponent,
    CanceledBookingsComponent
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot(),
  
  ]
})
export class BookingsModule { }
