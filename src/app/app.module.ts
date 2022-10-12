import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './module/login/login.module';
import { ProfileModule } from './module/profile/profile.module';
import { UpdateComponent } from './services/update/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    LoginModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
