import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageServicesRoutingModule } from './manage-services-routing.module';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ViewServicesComponent } from './components/view-services/view-services.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddServiceComponent,
    ViewServicesComponent
  ],
  imports: [
    CommonModule,
    ManageServicesRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManageServicesModule { }
