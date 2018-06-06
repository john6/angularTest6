import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm} from '@angular/forms';
import { StaffTypeService } from '../../staff-type.service';
import { StaffType } from '../../models/staff-type.model';
import { FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-staff-type-edit',
  templateUrl: './staff-type-edit.component.html',
  styleUrls: ['./staff-type-edit.component.css'],
  providers: [StaffTypeService]
})
export class StaffTypeEditComponent implements OnInit {
  @ViewChild('formData') staffTypeForm: NgForm
  addStaffTypeForm: FormGroup;

  constructor(private staffTypeService: StaffTypeService, public dialogRef: MatDialogRef<StaffTypeEditComponent>) { }

  ngOnInit() {
    this.addStaffTypeForm = new FormGroup({
      'description': new FormControl(null, Validators.required),
      'code': new FormControl(null, Validators.required),
      'role': new FormControl(null, Validators.required),
      'active': new FormControl(null, Validators.required),
      'modBy': new FormControl(null, Validators.required),
      'modDate': new FormControl(null, Validators.required)
    });
  }

  onSubmitAddStaffType() {
    const addedStaffType = new StaffType(
      this.addStaffTypeForm.value.description,
      this.addStaffTypeForm.value.code,
      this.addStaffTypeForm.value.role,
      this.addStaffTypeForm.value.active,
      this.addStaffTypeForm.value.modBy,
      this.addStaffTypeForm.value.modDate);
    this.staffTypeService.addStaffType(addedStaffType);
    console.log('I can access values: ' + addedStaffType.Last_Modified_Date_Time);
    console.log(this.addStaffTypeForm);
    console.log(addedStaffType);
    // this.addStaffTypeForm.controls.
  }
}
