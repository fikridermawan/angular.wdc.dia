import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobUpdateComponent } from './job-update.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobUpdateRoutingModule } from './job-update-routing.module';
import { LayoutsModule } from 'src/app/core/layouts/layouts.module';



@NgModule({
  declarations: [
    JobUpdateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JobUpdateRoutingModule,
    LayoutsModule
  ],
  exports: [
    JobUpdateComponent
  ]
})
export class JobUpdateModule { }
