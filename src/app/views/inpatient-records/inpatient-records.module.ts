import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InpatientRecordsRoutingModule } from './inpatient-records-routing.module';
import { InrecordListComponent } from './inrecord-list/inrecord-list.component';
import { AddInrecordComponent } from './add-inrecord/add-inrecord.component';
import {
  ButtonModule,
  FormModule,
  GridModule,
  ListGroupModule,
  ModalModule,
} from '@coreui/angular';

@NgModule({
  declarations: [InrecordListComponent, AddInrecordComponent],
  imports: [
    CommonModule,
    InpatientRecordsRoutingModule,
    ButtonModule,
    FormModule,
    GridModule,
    ListGroupModule,
    ModalModule,
  ],
})
export class InpatientRecordsModule {}
