import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  hashover: boolean = false;
  iscompact: boolean = false;
  sidebaronMobile: boolean = false;

  public isCDashboard = true;
  public isCBookings = true;
  public isCManageEvents = true;
  public isCManageServices = true;
  public isCReports = true;

  dashboard() {
    this.isCBookings = true;
    this.isCManageEvents = true;
    this.isCManageServices = true;
    this.isCReports = true;
  }
  booking() {
    this.isCManageEvents = true;
    this.isCManageServices = true;
    this.isCReports = true;
  }
  manageEvent() {
    this.isCBookings = true;
    this.isCManageServices = true;
    this.isCReports = true;
  }
  manageServices() {
    this.isCManageEvents = true;
    this.isCBookings = true;
    this.isCReports = true;
  }
  MainToggler() {
    this.isCManageEvents = true;
    this.isCBookings = true;
    this.isCReports = true;
    this.isCManageServices = true;
  }
  MainTogglerTwo() {
    if (this.iscompact === true) {
      this.isCManageEvents = true;
      this.isCBookings = true;
      this.isCReports = true;
      this.isCManageServices = true;
    }
  }
  reports() {
    this.isCManageEvents = true;
    this.isCManageServices = true;
    this.isCBookings = true;
  }

  ngOnInit(): void {
  }

}
