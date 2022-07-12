
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
//////////////////////////////////*************************/////////// */
import { MaterialModule } from '../../core/material';
import { ReactiveFormsModule } from '@angular/forms';
import {
  ButtonModule,
  FormModule,
  GridModule,
  ListGroupModule,
} from '@coreui/angular';

@NgModule({
  declarations: [
    DepartmentListComponent,
    AddDepartmentComponent,
    EditDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MaterialModule,
    GridModule,
    FormModule,
    ReactiveFormsModule,
    ButtonModule,
    ListGroupModule
  ]
})
export class DepartmentModule { }
