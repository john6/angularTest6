import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StaffTypeComponent } from './staff-type/staff-type.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StaffTypeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
