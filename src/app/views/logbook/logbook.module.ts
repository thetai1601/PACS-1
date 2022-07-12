import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogbookRoutingModule } from './logbook-routing.module';
import { LogbookComponent } from './logbook.component';


@NgModule({
  declarations: [
    LogbookComponent
  ],
  imports: [
    CommonModule,
    LogbookRoutingModule
  ]
})
export class LogbookModule { }
