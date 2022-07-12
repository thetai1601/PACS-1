import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInrecordComponent } from './add-inrecord/add-inrecord.component';
import { InrecordListComponent } from './inrecord-list/inrecord-list.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'Hồ sơ nội trú',
  },
  children: [
    {
      path: '',
      redirectTo: 'inpatient-records',
    },
    {
      path: 'list',
      component: InrecordListComponent,
      data: {
        title: 'Danh sách hồ sơ',
      },
    },
    {
      path: 'add',
      component: AddInrecordComponent,
      data: {
        title: 'Thêm mới hồ sơ',
      },
    },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InpatientRecordsRoutingModule { }
