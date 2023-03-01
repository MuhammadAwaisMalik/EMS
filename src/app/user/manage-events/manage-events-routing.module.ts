import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './components/add-event/add-event.component';
import { ViewEventsComponent } from './components/view-events/view-events.component';

const routes: Routes = [
  {
    path: 'add-event',
    component: AddEventComponent
  },
  {
    path: 'view-events',
    component: ViewEventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageEventsRoutingModule { }
