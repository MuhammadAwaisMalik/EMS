import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgbDateStruct, NgbCalendar, NgbDatepickerModule, NgbDate, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css']
})
export class AddBookingComponent implements OnInit {
  event: Array<String> = ['Anniversary', ' Birthday Party', 'Engagement', 'Get Together','Wedding'];
  addBookings:FormGroup | any;
  constructor(private Toast: HotToastService, private calendar: NgbCalendar, private fb :FormBuilder ,public formatter: NgbDateParserFormatter) { }
  model!: NgbDateStruct;
  date!: { year: number; month: number };
  time = ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 PM"]
  startTime: string = this.time[0]
  endTime: string = this.time[1]

  // multi day event
  togglerForEvent: boolean = true;
  hoveredDate: NgbDate | null = null;

  fromDate!: NgbDate | null;
  toDate !: NgbDate | null;

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }
  // end


  selectToday() {
    this.model = this.calendar.getToday();
  }

  dropdownList: any = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 1,
    allowSearchFilter: true
  };
  ngOnInit() {
    this.addBookings = this.fb.group({
      customerName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      cnic: ['',[Validators.required,Validators.pattern('^[0-9]{5}-[0-9]{7}-[0-9]{1}$')]],
      phoneNumber: ['',[Validators.required,Validators.pattern('^[0-9]{4}-[0-9]{7}$')]],
      eventType: ['',[Validators.required]],
      persons: ['',[Validators.required]],
      note: ['',[Validators.required,Validators.minLength(3)]],
      Joining_Date:['',[Validators.required]],
      state: ['',[Validators.required]],
      JoiningDate: ['',[Validators.required]],
      Date: ['',[Validators.required]],
    })
    this.dropdownList = [
      { item_id: 1, item_text: 'Naan Shami' },
      { item_id: 2, item_text: 'Chicken Manchurian' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
  }
  get customerName(){
    return this.addBookings.get('customerName')
  }
  get email(){
    return this.addBookings.get('email')
  }
  get cnic(){
    return this.addBookings.get('cnic')
  }
  get phoneNumber(){
    return this.addBookings.get('phoneNumber')
  }
  get eventType(){
    return this.addBookings.get('eventType')
  }
  get persons(){
    return this.addBookings.get('persons')
  }
  get note(){
    return this.addBookings.get('note')
  }
  get Joining_Date(){
    const temp = this.addBookings.controls.loginCredentials;
    return temp.controls.Joining_Date;
  }
  
  get JoiningDate(){
    const temp = this.addBookings.controls.loginCredentials;
    return temp.controls.JoiningDate;
  }
  get Date(){
    const temp = this.addBookings.controls.loginCredentials;
    return temp.controls.Date;
  }
  get state(){
    return this.addBookings.get('state')
  }
 
  addSuccessfully() {
    this.Toast.success("Data Add Successfully!!",
      {
        position: 'top-center'
      }
    )
  }

}