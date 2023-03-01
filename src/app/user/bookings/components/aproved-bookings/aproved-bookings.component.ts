import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-aproved-bookings',
  templateUrl: './aproved-bookings.component.html',
  styleUrls: ['./aproved-bookings.component.css']
})
export class AprovedBookingsComponent implements OnInit {

  constructor(public Toast: ToastService) {
  }
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        searchPlaceholder: "Type Into Search"
      }
    };
    this.dropdownList = [
      { item_id: 1, item_text: 'Naan Shami' },
      { item_id: 2, item_text: 'Chicken Manchurian' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
  }

}
