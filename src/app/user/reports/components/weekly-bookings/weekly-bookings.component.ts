import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-weekly-bookings',
  templateUrl: './weekly-bookings.component.html',
  styleUrls: ['./weekly-bookings.component.css'],
})
export class WeeklyBookingsComponent implements OnInit {
  constructor() { }
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
}
