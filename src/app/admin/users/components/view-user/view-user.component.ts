import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';
import { UserDetailService } from '../../services/user-detail.service';
import { Inter } from '../../inter';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  constructor(
    public Toast: ToastService,
    public userDetails: UserDetailService,
    private httpClient: HttpClient
    ){
      this.fetch();
     }
  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 5,
    language: {
      searchPlaceholder: "Type Into Search"
    }
  };
  dtTrigger: Subject<any> = new Subject<any>();

  allUsers: Inter[] = [];
  dataForTable: Inter[] = [];
  eachUser: Inter = {
    id: 0,
    customerName:'',
    emailAddress:'',
    CNIC_Number: 0,
    phoneNumber: 0,
    venueName:'',
    venueAddress:'',
    Username:'',
    Password:'',
    Joining_Date:'',
    Expiry_Date:'',
    Payment: '',
    Status:''
  };

  

  fetch() {
    this.userDetails.get().subscribe((data) => {
      this.dataForTable = data;
    })
    this.httpClient.get<any>('http://localhost:3000/user').subscribe(data => {
      this.dataForTable = data;
      this.dtTrigger.next(null);
    });
  }


  delete(id: number) {
    this.userDetails.delete(id).subscribe((data) => {
      this.dataForTable = this.dataForTable.filter((_) => _.id !== id);
    });
  }
  update(payload:Inter){
    this.userDetails.update(payload).subscribe((data)=>{
      console.log(data);
      
    })
  }

  ngOnInit(): void {
      
  }

}