import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-canceled-bookings',
  templateUrl: './canceled-bookings.component.html',
  styleUrls: ['./canceled-bookings.component.css']
})
export class CanceledBookingsComponent implements OnInit {

  constructor(private Toast: HotToastService) { }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        searchPlaceholder: "Type Into Search"
      }

    };
  }

  sendReminder() {
    this.Toast.success("Reminder Sent!!",
      {
        position: 'top-center'
      }
    )
  }

  bookingDeleted() {
    this.Toast.success("Booking Deleted!!",
      {
        position: 'top-center'
      }
    )
  }

  statusChanged() {
    this.Toast.success("Status Changed!!",
      {
        position: 'top-center'
      }
    )
  }

}
