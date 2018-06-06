import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl, NgForm} from "@angular/forms";
import { StaffTypeService } from '../../staff-type.service';
import { StaffType } from "../../models/staff-type.model";
import { FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-staff-type-edit',
  templateUrl: './staff-type-edit.component.html',
  styleUrls: ['./staff-type-edit.component.css'],
  providers: [StaffTypeService]
})
export class StaffTypeEditComponent implements OnInit {
  @ViewChild('formData') staffTypeForm: NgForm
  addStaffTypeForm: FormGroup;

  constructor(private atService: StaffTypeService) { }

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
    let addedStaffType = new StaffType(this.addStaffTypeForm.value.staffTypeCode, this.addStaffTypeForm.value.staffTypeDescription, this.addStaffTypeForm.value.staffRole, this.addStaffTypeForm.value.staffActive, this.addStaffTypeForm.value.lastModifiedBy, this.addStaffTypeForm.value.lastModifiedByDateTime);
    this.atService.addStaffType(addedStaffType);
    console.log("I can access values fyi" + addedStaffType.Last_Modified_Date_Time)
    console.log(this.addStaffTypeForm)
    //this.addStaffTypeForm.controls.
  }


/*
  onAddStaffType() {
    let addedStaffType = new StaffType(this.staffTypeForm.form.value.staffTypeCode, this.staffTypeForm.form.value.staffTypeDescription, this.staffTypeForm.form.value.staffRole, this.staffTypeForm.form.value.staffActive, this.staffTypeForm.form.value.lastModifiedBy, this.staffTypeForm.form.value.lastModifiedByDateTime);
    this.atService.addStaffType(addedStaffType);
    console.log("I can access values fyi" + addedStaffType.Last_Modified_Date_Time)
    console.log(this.staffTypeForm)
  }
*/

}
