import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  service: FormGroup | any;
  constructor(private fb:FormBuilder) { }
  togglerForService:boolean=true;

  ngOnInit(): void {
    this.service = this.fb.group({
      servicename: ['',[Validators.required,Validators.minLength(3)]],
      costprice: ['',[Validators.required,Validators.minLength(5)]],
    headprice: ['',[Validators.required]],
    servicedescription: ['',[Validators.required,Validators.minLength(3)]],
  })
  }
  get servicename(){
    return this.service.get('servicename')
  }
  get costprice(){
    return this.service.get('costprice')
  }
  get headprice(){
    const temp = this.service.controls.loginCredentials;
    return temp.controls.headprice; 
}
get servicedescription(){
  return this.service.get('servicedescription')
}
}
