import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})
export class DashboardContentComponent implements OnInit {

  constructor() { }
  main1 = false;
  main2 = false;
  main3 = false;

  ngOnInit(): void {
  }

}
