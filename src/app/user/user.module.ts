import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardContentComponent } from './components/dashboard-content/dashboard-content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContentComponent,
     ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [DashboardComponent]
})
export class UserModule { 
  constructor(){
    console.log('user')
  }
}
