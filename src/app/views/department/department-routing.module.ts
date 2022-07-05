import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Khoa phòng',
    },
    children: [
      {
        path: '',
        redirectTo: 'department',
      },
      {
        path: 'list',
        component: DepartmentListComponent,
        data: {
          title: 'Danh sách khoa phòng',
        },
      },
      {
        path: 'add',
        component: AddDepartmentComponent,
        data: {
          title: 'Thêm mới khoa phòng',
        },
      },
      {
        path: 'edit',
        component: EditDepartmentComponent,
        data: {
          title: 'Cập nhật thông tin khoa phòng',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
