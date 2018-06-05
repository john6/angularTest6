import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StaffTypeComponent } from './staff-type/staff-type.component';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffTypeTableComponent } from './staff-type/staff-type-table/staff-type-table.component';
import { StaffTypeTableRowComponent } from './staff-type/staff-type-table/staff-type-table-row/staff-type-table-row.component';
import { StaffTypeEditComponent } from './staff-type/staff-type-edit/staff-type-edit.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StaffTypeComponent,
    StaffTypeTableComponent,
    StaffTypeTableRowComponent,
    StaffTypeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
