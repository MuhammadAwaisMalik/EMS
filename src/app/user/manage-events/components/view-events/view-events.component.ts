import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.css']
})
export class ViewEventsComponent implements OnInit {

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

  updateSuccessfully() {
    this.Toast.success("Data Update Successfully!!",
      {
        position: 'top-center'
      }
    )
  }

}
