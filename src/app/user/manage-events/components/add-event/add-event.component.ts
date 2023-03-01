import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  addevent: FormGroup | any;
  constructor(private Toast: HotToastService,  private fb:FormBuilder) { }


   
  ngOnInit(): void {
    this.addevent = this.fb.group({
      eventName: ['',[Validators.required,Validators.minLength(3)]],
      costprice: ['',[Validators.required,Validators.minLength(5)]],
      grossprice: ['',[Validators.required,Validators.minLength(5)]],
      eventdescription: ['',[Validators.required,Validators.minLength(3)]],
    })
  }

  addSuccessfully() {
    this.Toast.success("Data Add Successfully!!",
      {
        position: 'top-center'
      }
    )
  }
  get eventName(){
    return this.addevent.get('eventName')
  }
  get costprice(){
    return this.addevent.get('costprice')
  }
  get grossprice(){
    return this.addevent.get('grossprice')
  }
  get eventdescription(){
    return this.addevent.get('eventdescription')
  }

}
