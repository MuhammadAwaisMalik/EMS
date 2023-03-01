import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddServiceComponent } from './components/add-service/add-service.component';
import { ViewServicesComponent } from './components/view-services/view-services.component';

const routes: Routes = [
  {
    path: 'add-service',
    component: AddServiceComponent
  },
  {
    path: 'view-services',
    component: ViewServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageServicesRoutingModule { }
