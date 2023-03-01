import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageEventsRoutingModule } from './manage-events-routing.module';
import { ViewEventsComponent } from './components/view-events/view-events.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ViewEventsComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    ManageEventsRoutingModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManageEventsModule { }
