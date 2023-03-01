import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { HotToastService } from '@ngneat/hot-toast';
import { UserDetailService } from '../../services/user-detail.service';
import { Inter } from '../../inter';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  val:any;
  togglerForPayment: boolean = true;
  modelJ: NgbDateStruct = {
    year: 0,
    month: 0,
    day: 0
  };
  modelE: NgbDateStruct = {
    year: 0,
    month: 0,
    day: 0
  };
  addUser: FormGroup | any;

  addUserHub: Inter = {
    id: 0,
    customerName: '',
    emailAddress: '',
    CNIC_Number: "",
    phoneNumber: "",
    venueName: '',
    venueAddress: '',
    Username :"",
    Password: '',
    Joining_Date: '',
    Expiry_Date: '',
    Payment:'',
    Status: 'Active'
  }
  sendTrail(){
  (this.togglerForPayment===true)?this.addUserHub.Payment="":this.addUserHub.Payment="trail";  
}
  constructor(private Toast: HotToastService,
    private fb: FormBuilder, private ds: UserDetailService, private router: Router, private route: ActivatedRoute) { }

  selectedDate() {
    if (this.modelJ.day) {
      this.addUserHub.Joining_Date = `${this.modelJ.day}-${this.modelJ.month}-${this.modelJ.year}`
    }
    if (this.modelE.day) {
      this.addUserHub.Expiry_Date = `${this.modelE.day}-${this.modelE.month}-${this.modelE.year}`
    }
  }

  creat() {
    this.ds.creat(this.addUserHub)
      .subscribe({
        next: (data) => {
          this.router.navigate(["/admin/users/view-user"])
        },
        error: (error) => {
          console.error(error);
        }

      })
  }

  ngOnInit() {
    this.addUser = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      emailAddress: ['', [Validators.required, Validators.email]],
      cnic: ['', [Validators.required, Validators.pattern('^[0-9]{5}-[0-9]{7}-[0-9]{1}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{4}-[0-9]{7}$')]],
      venueName: ['', [Validators.required, Validators.minLength(5)]],
      venueAddress: ['', [Validators.required, Validators.minLength(5)]],
      loginCredentials: this.fb.group({
        Username: ['', [Validators.required, Validators.minLength(3)]],
        Password: ['', [Validators.required, Validators.minLength(3)]],
        Joining_Date: ['', [Validators.required]],
        Expiry_Date: ['', [Validators.required]],
        Payment:['',[Validators.required]]
      })
    })
  }

  get customerName() {
    return this.addUser.get('customerName')
  }
  get emailAddress() {
    return this.addUser.get('emailAddress')
  }
  get cnic() {
    return this.addUser.get('cnic')
  }
  get phoneNumber() {
    return this.addUser.get('phoneNumber')
  }
  get venueName() {
    return this.addUser.get('venueName')
  }
  get venueAddress() {
    return this.addUser.get('venueAddress')
  }
  get Username() {
    const temp = this.addUser.controls.loginCredentials;
    return temp.controls.Username;
  }
  get Joining_Date() {
    const temp = this.addUser.controls.loginCredentials;
    return temp.controls.Joining_Date;
  }
  get Expiry_Date() {
    const temp = this.addUser.controls.loginCredentials;
    return temp.controls.Expiry_Date;
  }
  // get Paid(){
  //   const temp = this.addUser.controls.loginCredentials;
  //   return temp.controls.Paid;
  // }
  get Password() {
    const temp = this.addUser.controls.loginCredentials;
    return temp.controls.Password;
  }
}
