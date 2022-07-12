import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

//////////////////////***********************************/////////////////////////////
import { MaterialModule } from '../../core/material';
import { EmployeeDialogComponent } from './employee-dialog/employee-dialog.component';
import {
  ButtonModule,
  FormModule,
  GridModule,
  ListGroupModule,
  ModalModule
} from '@coreui/angular';

@NgModule({
  declarations: [
    EmployeeListComponent,
    AddEmployeeComponent,
    EmployeeDialogComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    GridModule,
    FormModule,
    ListGroupModule,
    ButtonModule,
    ModalModule
  ],
})
export class EmployeeModule {}
