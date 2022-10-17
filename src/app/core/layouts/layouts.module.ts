import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { HomeContentComponent } from './home-content/home-content.component';



@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    HomeContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent,
    SidebarComponent,
    FooterComponent,
    ContentComponent,
    HomeContentComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutsModule { }
