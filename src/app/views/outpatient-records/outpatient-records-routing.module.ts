import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutpatientRecordsComponent } from './outpatient-records.component';

const routes: Routes = [{ path: '', component: OutpatientRecordsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutpatientRecordsRoutingModule { }
