import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutpatientRecordsRoutingModule } from './outpatient-records-routing.module';
import { OutpatientRecordsComponent } from './outpatient-records.component';


@NgModule({
  declarations: [
    OutpatientRecordsComponent
  ],
  imports: [
    CommonModule,
    OutpatientRecordsRoutingModule
  ]
})
export class OutpatientRecordsModule { }
