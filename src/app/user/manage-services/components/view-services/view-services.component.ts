import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-view-services',
  templateUrl: './view-services.component.html',
  styleUrls: ['./view-services.component.css']
})
export class ViewServicesComponent implements OnInit {

  constructor(private Toast: HotToastService) { }
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    language: {
      searchPlaceholder: "Type Into Search"
    }
  };
  dtTrigger: Subject<any> = new Subject<any>();
  togglerForEditService:boolean=true;
  ngOnInit(): void {
  
  }

  updateSuccessfully() {
    this.Toast.success("Data Update Successfully!!",
      {
        position: 'top-center'
      }
    )
  }

}
