import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './module/home/home.module';
import { LoginModule } from './module/login/login.module';
import { ProfileModule } from './module/profile/profile.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutsModule } from './core/layouts/layouts.module';
import { JobListModule } from './module/job-list/job-list.module';
import { JobUpdateModule } from './module/job-update/job-update.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    ProfileModule,
    LoginModule,
    HomeModule,
    JobListModule,
    JobUpdateModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
