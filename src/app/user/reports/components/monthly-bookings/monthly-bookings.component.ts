import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-monthly-bookings',
  templateUrl: './monthly-bookings.component.html',
  styleUrls: ['./monthly-bookings.component.css']
})
export class MonthlyBookingsComponent implements OnInit {

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
