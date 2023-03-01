import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AprovedBookingsComponent } from './components/aproved-bookings/aproved-bookings.component';
import { CanceledBookingsComponent } from './components/canceled-bookings/canceled-bookings.component';
import { PendingBookingsComponent } from './components/pending-bookings/pending-bookings.component';

const routes: Routes = [
  {
    path: 'addbooking',
    component: AddBookingComponent
  },
  {
    path: 'aprovedbookings',
    component: AprovedBookingsComponent
  },
  {
    path: 'pendingbookings',
    component: PendingBookingsComponent
  },
  {
    path: 'canceledbookings',
    component: CanceledBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
