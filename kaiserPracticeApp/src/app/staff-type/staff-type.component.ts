import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';
import {StaffTypeEditComponent} from './staff-type-edit/staff-type-edit.component';

@Component({
  selector: 'app-staff-type',
  templateUrl: './staff-type.component.html',
  styleUrls: ['./staff-type.component.css']
})
export class StaffTypeComponent implements OnInit {

  constructor(public dialogBox: MatDialog) { }

  ngOnInit() {
  }

  openStaffTypeEdit(): void {
    const dialogRef = this.dialogBox.open(StaffTypeEditComponent, {
      width: '250px',
      height: '250px',
      data: {}
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed: ' + result);
    // });
  }
}
