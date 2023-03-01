import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  hashover: boolean = false;
  iscompact: boolean = false;
  sidebaronMobile: boolean = false;

  public isCDashboard = true;
  public isCInvoices = true;
  public isCUsers = true;

  dashboard() {
    this.isCInvoices = true;
    this.isCUsers = true;
  }
  invoices() {
    this.isCUsers = true;
  }
  MainToggler() {
    this.isCUsers = true;
    this.isCInvoices = true;
  }
  MainTogglerTwo() {
    if (this.iscompact === true) {
      this.isCUsers = true;
      this.isCInvoices = true;
    }
  }
  user() {
    this.isCInvoices = true;
  }

  ngOnInit(): void {
  }

}
