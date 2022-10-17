import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutsModule } from 'src/app/core/layouts/layouts.module';
import { JobListRoutingModule } from './job-list-routing.module';



@NgModule({
  declarations: [
    JobListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JobListRoutingModule,
    LayoutsModule
  ],
  exports: [
    JobListComponent
  ]
})
export class JobListModule { }
