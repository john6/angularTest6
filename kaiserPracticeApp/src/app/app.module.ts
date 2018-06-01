import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StaffTypeComponent } from './staff-type/staff-type.component';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffTypeTableComponent } from './staff-type-table/staff-type-table.component';
import { StaffTypeTableRowComponent } from './staff-type-table-row/staff-type-table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StaffTypeComponent,
    StaffTypeTableComponent,
    StaffTypeTableRowComponent
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
