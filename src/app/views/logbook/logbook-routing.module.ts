import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogbookComponent } from './logbook.component';

const routes: Routes = [{ path: '', component: LogbookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogbookRoutingModule { }
