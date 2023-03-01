import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-between-dates-bookings',
  templateUrl: './between-dates-bookings.component.html',
  styleUrls: ['./between-dates-bookings.component.css']
})
export class BetweenDatesBookingsComponent implements OnInit {

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
