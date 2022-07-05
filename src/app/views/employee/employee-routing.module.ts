import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Nhân viên',
    },
    children: [
      {
        path: '',
        redirectTo: 'employee',
      },
      {
        path: 'list',
        component: EmployeeListComponent,
        data: {
          title: 'Danh sách nhân viên',
        },
      },
      {
        path: 'add',
        component: AddEmployeeComponent,
        data: {
          title: 'Thêm mới nhân viên',
        },
      },
      {
        path: 'edit',
        component: EditEmployeeComponent,
        data: {
          title: 'Cập nhật thông tin nhân viên',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
